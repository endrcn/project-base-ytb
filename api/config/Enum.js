module.exports = {
    HTTP_CODES: {
        OK: 200,
        CREATED: 201,
        NO_CONTENT: 204,
        NOT_MODIFIED: 304,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 405,
        NOT_ACCEPTABLE: 406,
        TIMED_OUT: 408,
        CONFLICT: 409,
        GONE: 410,
        UNSUPPORTED_MEDIA_TYPE: 415,
        UNPROCESSIBLE_ENTITY: 422,
        TOO_MANY_REQUESTS: 429,
        INT_SERVER_ERROR: 500,
        BAD_GATEWAY: 502
    },

    PASS_LENGTH: 8,
    SUPER_ADMIN: "SUPER_ADMIN",

    LOG_LEVELS: {
        "INFO": "INFO",
        "WARN": "WARN",
        "ERROR": "ERROR",
        "DEBUG": "DEBUG",
        "VERBOSE": "VERBOSE",
        "HTTP": "HTTP"
    }
}