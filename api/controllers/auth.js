import express from "express"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken"
// export const register = async (req, res) => {

//   const salt = bcrypt.genSaltSync(10);
//   const hash = bcrypt.hashSync(req.body.password, salt);

//   try {
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hash
//     })

//     await newUser.save();
//     res.status(200).json(newUser)

//   } catch (err) {
//     res.status(500).json(err)

//   }
// }




export const login = async (req, res) => {
  try {

    const user = await User.findOne({ username: req.body.username })
    if (user) {
      const comparepass = bcrypt.compare(req.body.password, user.password);
      if (!comparepass) {
        res.status(500).json("password is incrrect")
      } else {

        let accesstoken = Jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT
        );

        const { password, ...other } = user._doc

        res.status(200).json({ accesstoken, ...other })
      }

    } else {
      res.status(500).json("Pleasse register first");

    }

  } catch (err) {
    res.status(500).json(err)

  }
}









export const register = async (req, res) => {
  const { password, ...data } = req.body
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const user = new User({ ...data, password: hash })
    const saveuser =await user.save();
    res.status(200).json(saveuser)
  } catch (err) {
    res.status(500).json(err);
  }
}













// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import { createError } from "../utils/error.js";
// import jwt from "jsonwebtoken";

// export const register = async (req, res, next) => {
//   try {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });

//     await newUser.save();
//     res.status(200).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };