import express from "express";
const router = express.Router();

import {createDepartment} from "../controllers/DepartmentController.js";

// /api/user-role/----------
router.post("/",createDepartment);

export default router;