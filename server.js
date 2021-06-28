import path from 'path'
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

import userRoleRoutes from "./routes/Role.js";
import userRoutes from "./routes/User.js";

const app = express();
dotenv.config();
connectDB();

app.use(morgan("dev"));
app.use(express.json());

app.get("/test", (req, res) => {
  res.send({ testing: "successful" });
});


// routes

app.use('/api/user-role', userRoleRoutes);
app.use('/api/users', userRoutes);


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
