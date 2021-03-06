import mongoose from 'mongoose';
const { Schema } = mongoose;

const secretCodeSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
        expires: 600, // 600 seconds; 10 mins.
    },
});

const secretCode = mongoose.model("secretCode", secretCodeSchema);
export default secretCode;