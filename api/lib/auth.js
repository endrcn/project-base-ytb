const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
const Users = require("../db/models/Users");
const UserRoles = require("../db/models/UserRoles");
const RolePrivileges = require("../db/models/RolePrivileges");
const Response = require("./Response");
const { HTTP_CODES } = require("../config/Enum");

const config = require("../config");

const privs = require("../config/role_privileges");
const CustomError = require("./Error");

module.exports = function () {
    let strategy = new Strategy({
        secretOrKey: config.JWT.SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (payload, done) => {
        try {

            let user = await Users.findOne({ _id: payload.id });

            if (user) {

                let userRoles = await UserRoles.find({ user_id: payload.id });

                let rolePrivileges = await RolePrivileges.find({ role_id: { $in: userRoles.map(ur => ur.role_id) } });

                let privileges = rolePrivileges.map(rp => privs.privileges.find(x => x.key == rp.permission))

                done(null, {
                    id: user._id,
                    roles: privileges,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    language: user.language,
                    exp: parseInt(Date.now() / 1000) * config.JWT.EXPIRE_TIME
                });

            } else {
                done(new Error("User not found"), null);
            }

        } catch (err) {
            done(err, null);
        }

    });

    passport.use(strategy);

    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate("jwt", { session: false })
        },
        checkRoles: (...expectedRoles) => {
            return (req, res, next) => {

                let i = 0;
                let privileges = req.user.roles.map(x => x.key);

                while (i < expectedRoles.length && !privileges.includes(expectedRoles[i])) i++;

                if (i >= expectedRoles.length) {
                    let response = Response.errorResponse(new CustomError(HTTP_CODES.UNAUTHORIZED, "Need Permission", "Need Permission"));
                    return res.status(response.code).json(response);
                }

                return next(); // Authorized

            }
        }
    }
}

