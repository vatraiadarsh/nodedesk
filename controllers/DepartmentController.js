import Department from '../models/department.js';
import asyncHandler from '../middlewares/async.js';
import ErrorResponse from '../helpers/errorResponse.js';

export const createDepartment = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const publishedDepartment = await Department.findOne({ name });

  if (publishedDepartment) {
    return next(
      new ErrorResponse(`The department with ${req.body.name} already exists.`)
    );
  }
  const department = await Department.create({name});
  return res.status(201).json({
    success: true,
    data: department,
  });
});
