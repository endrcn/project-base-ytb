const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {type: String, required: true},
    is_active: { type: Boolean, default: true },
    created_by: { type: mongoose.SchemaTypes.ObjectId }
}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Categories extends mongoose.Model {

}

schema.loadClass(Categories);
module.exports = mongoose.model("categories", schema);