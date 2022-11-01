import Mindpost from '../models/Mindpost.js';
import User from '../models/User.js';

export const updateuser = async (req, res, next) => {
  try {
    const hotel = await User.findByIdAndUpdate (
      req.params.id,
      {$set: req.body},
      {new: true}
    );
    res.status (200).json (hotel);
  } catch (err) {
    res.status (500).json (err);
  }
};

export const deleteuser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete (req.params.id);
    res.status (200).json ('User has been deleted');
  } catch (err) {
    res.status (500).json (err);
  }
};

export const phaseUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
   const user=await User.findById(userId);
    res.status (200).json (user);
  } catch (err) {
    res.status(500).json (err);
  }
};

export const Alluser = async (req, res, next) => {
  try {
    const alluser= await User.find();
    res.status (200).json (alluser);
  } catch (err) {
    res.status(200).json (err);
  }
};


export const getpuser = async (req, res) => {
  try {
    const user = await User.findById (req.params.id);
    if (user) {
      res.status (200).json (user);
    } else {
      res.status (401).json ('User doesnt exist');
    }
  } catch (err) {
    res.status (500).json (err);
  }
};

export const followUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById (req.params.id);
      const currentUser = await User.findById (req.body.userId);
      if (!user.followers.includes (req.body.userId)) {
        await currentUser.updateOne ({
          $push: {followings: req.params.id},
        });
        await user.updateOne ({$push: {followers: req.body.userId}});
        res.status (200).json ('you succesfully follow this user');
      } else {
        res.status (403).json ('You already follow this user');
      }
    } catch (err) {
      res.status (403).json (err);
    }
  } else {
    res.status (403).json ('You cannot follow Yourself');
  }
};

export const unfollowUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.id) {
      const user = await User.findById (req.params.id);
      const MeId = await User.findById (req.body.userId);

      if (!user.followers.includes (req.body.userId)) {
        await MeId.updateOne ({$pull: {following: req.user.id}});
        await user.updateOne ({$pull: {followers: req.user.userId}});
      } else {
        res.status (403).json ('You already unfollow this User');
      }
    } else {
      res.status (403).json ('You already unfollow this User');
    }
  } catch (err) {
    res.status (500).json (err);
  }
};

// import User from "../models/User.js";

// export const updateUser = async (req,res,next)=>{
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     next(err);
//   }
// }
// export const deleteUser = async (req,res,next)=>{
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json("User has been deleted.");
//   } catch (err) {
//     next(err);
//   }
// }
// export const getUser = async (req,res,next)=>{
//   try {
//     const user = await User.findById(req.params.id);
//     res.status(200).json(user);
//   } catch (err) {
//     next(err);
//   }
// }
// export const getUsers = async (req,res,next)=>{
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     next(err);
//   }
// }
