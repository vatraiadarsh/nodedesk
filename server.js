import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import cors from 'cors';
import connectDB from './config/db.js';
import errorHandler from './middlewares/error.js';

// Route files
import userRoleRoutes from './routes/Role.js';
import userRoutes from './routes/User.js';
import departmentRoutes from './routes/Department.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
const limiter = rateLimit({
  windowsMs: 10 * 60 * 1000, // 10 mins
  max: 1000,
});
app.use(limiter);
// Prevent http param pollution
app.use(hpp());
app.use(cors());

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routes

app.get('/', (req, res) => {
  res.send({ testing: 'successful' });
});

app.use('/api/users', userRoutes);
app.use('/api/role', userRoleRoutes);
app.use('/api/department', departmentRoutes);

// error handler after routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
