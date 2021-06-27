import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    role_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userRole'
    }],
    password: {
        type: String,
        required: true,
    },
    email_verification:{
        type:String,
        default:"pending"
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;