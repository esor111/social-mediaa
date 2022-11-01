import express from 'express';
import {
  deleteuser,
  phaseUser,
  getpuser,
  updateuser,
  followUser,
  Alluser,
} from '../controllers/user.js';
import User from '../models/User.js';
import {verfyTokenAdmin, verifyUser} from '../controllers/Authcontrolar.js';
const router = express.Router ();

router.put ('/:id', updateuser);

router.delete ('/:id', verifyUser, deleteuser);

//GET userS

router.get ('/postuser/:userId', phaseUser);

router.get ('/:id', getpuser);
router.get ('/', Alluser);

router.put ('/:id/follow/', followUser);

router.get ('/', async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById (userId)
      : await User.findOne ({username: username});
    const {password, updatedAt, ...other} = user._doc;
    res.status (200).json (other);
  } catch (err) {
    res.status (500).json (err);
  }
});

export default router;

// import express from "express";
// import {
//   updateUser,
//   deleteUser,
//   getUser,
//   getUsers,
// } from "../controllers/user.js";
// import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// const router = express.Router();

// // router.get("/checkauthentication", verifyToken, (req,res,next)=>{
// //   res.send("hello user, you are logged in")
// // })

// // router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
// //   res.send("hello user, you are logged in and you can delete your account")
// // })

// // router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
// //   res.send("hello admin, you are logged in and you can delete all accounts")
// // })

// //UPDATE
// router.put("/:id", verifyUser, updateUser);

// //DELETE
// router.delete("/:id", verifyUser, deleteUser);

// //GET
// router.get("/:id", verifyUser, getUser);

// //GET ALL
// router.get("/", verifyAdmin, getUsers);

// export default router;
