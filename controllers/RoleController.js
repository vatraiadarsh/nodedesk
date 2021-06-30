import Role from '../models/Role.js';
import asyncHandler from '../middlewares/async.js';
import ErrorResponse from '../helpers/errorResponse.js';

export const createUserRole = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const checkUserRole = await Role.findOne({ name });
  if (checkUserRole) {
    return next(new ErrorResponse(`The Role ${req.body.name} already exists.`));
  }

  const role = await Role.create({name});
  return res.status(201).json({
    success: true,
    data: role,
  });
});

export const test = (req, res) => {
  res.json({
    testing: 'successful',
  });
};
