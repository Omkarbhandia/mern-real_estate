import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorhandler(404, "User not Found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorhandler(401, "Invalid Credentials!."));

    //creating token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_TOKEN);
    const {password : pass, ...userInfo} = validUser._doc
    res.cookie('access_token', token, {httpOnly: true}).status(200).json(userInfo)
  } catch (error) {
    next(error);
  }
};
