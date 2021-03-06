import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters'],
      },
    status:{
        type:Boolean,
        default:false
    }
   
}, {
    timestamps: true
});

const Role = mongoose.model("Role", RoleSchema);
export default Role;