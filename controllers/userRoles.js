import userRole from "../models/userRoles.js";


export const createUserRole = async (req, res) => {
    const { name, type, permission } = req.body;
    const checkUserRole = await userRole.findOne({ name });
    if (checkUserRole) {
        res.status(401).json({ message: "User Role already exists" })
    }
    const userRoles = new userRole({
        name,
        type,
        permission
    });
    const createdUserRoles = await userRoles.save();
    return res.status(201).json(createdUserRoles);
};



export const test = (req, res) => {
    res.json({
        testing: "successful"
    });
}