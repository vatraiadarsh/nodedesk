import express from "express";
const router = express.Router();

import {createUserRole,test} from "../controllers/userRoles.js";

// /api/user-role/----------
router.route('/').post(createUserRole);
router.route('/test').get(test);

export default router;