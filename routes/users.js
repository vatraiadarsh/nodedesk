import express from "express";
const router = express.Router();

import {createUser} from "../controllers/User.js";
import {uploadSingleImage} from "../middlewares/fileUpload.js"


// /api/users/----------
router.post('/',uploadSingleImage,createUser);

export default router;