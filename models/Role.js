import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    },
    permission: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Role = mongoose.model("Role", RoleSchema);
export default Role;