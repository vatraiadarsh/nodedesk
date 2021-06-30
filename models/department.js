import mongoose from "mongoose";
const { Schema } = mongoose;

const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters'],
      },
   
}, {
    timestamps: true
});

const Department = mongoose.model("Department", DepartmentSchema);
export default Department;