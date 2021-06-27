import mongoose from "mongoose";

const userRoleSchema = mongoose.Schema({
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

const userRole = mongoose.model("userRole", userRoleSchema);
export default userRole;