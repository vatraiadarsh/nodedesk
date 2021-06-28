import express from "express";
const router = express.Router();

import {createUser} from "../controllers/UserController.js";
import {uploadSingleImage} from "../middlewares/fileUpload.js"


// /api/users/----------
router.post('/',uploadSingleImage,createUser);

export default router;