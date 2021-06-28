import nodemailer from "nodemailer";
import User from "../models/User.js";
import SecretCode from "../models/Code.js";


export const createUser = async (req, res) => {
  console.log(req.file);
  const { name, email, role_id, password, email_verification } = req.body;
  const checkUser = await User.findOne({
    email,
  });
  if (checkUser) {
    res.status(401).json({
      message: "User with that email already exists",
    });
  }
  const user = new User({
    name,
    email,
    avatar: req.file.path,
    role_id,
    password,
    email_verification,
  });
  const createdUser = await user.save();
  res.status(201).json(createdUser);

  const verification_number = Math.floor(100000 + Math.random() * 900000);
    const transport = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

  const mailOptions = {
    from: "noreply@nodedesk.com",
    to: user.email,
    subject: "Verify your account",

    html: `<h3>Please find the verification code below it will expire in 10 minutes <br><br><br>${verification_number} </h3>`,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });

  const code = new SecretCode({
      email:user.email,
      code:verification_number
  });

  const createdCode = await code.save();
  
};
