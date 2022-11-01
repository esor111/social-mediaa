import Mindpost from '../models/Mindpost.js';
import User from '../models/User.js';
export const postMind = async (req, res) => {
  try {
    const Posts = new Mindpost (req.body);
    const savePost = await Posts.save ();
    res.status (200).json (savePost);
  } catch (err) {
    res.status (500).json (err);
  }
};

export const getllPost = async (req, res) => {
  try {
    const posts = await Mindpost.find ();
    res.status (200).json (posts);
  } catch (err) {
    res.status (500).json (err);
  }
};

export const deletePost = async (req, res) => {
  try {
    const posts = await Mindpost.findByIdAndDelete (req.params.id);
    res.status (200).json (posts)
  } catch (err) {
    res.status (500).json (err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const posts = await Mindpost.findByIdAndUpdate (
      req.params.id,
      {$set: req.body},
      {$new: true}
    );
    res.status (200).json (posts);
  } catch (err) {
    res.status (500).json (err);
  }
};

export const findPpost = async (req, res) => {
  try {
    const posts = await Mindpost.findById (req.params.id);
    res.status (200).json (posts);
  } catch (err) {
    res.status (500).json (err);
  }
};


export const Timeline = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userIdd);
    const userPosts = await Mindpost.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Mindpost.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status (500).json (err);
  }
  };


  export const likes = async (req, res) => {
    try {
      const post = await Mindpost.findById (req.params.id);
      if (!post.likes.includes (req.body.userId)) {
        await post.updateOne ({$push: {likes: req.body.userId}});
        res.status(200).json("liked")
      } else {
        await post.updateOne ({$pull: {likes: req.body.userId}});
        res.status(200).json("unliked")
      }
    } catch (err) {
      res.status (500).json (err);
    }
  };




  export const getPuserPost = async (req, res) => {
    try {
    
      const user =await Promise.all(Mindpost.userId.map((userid)=>{
        return User.find()
      }))
    } catch (err) {
      res.status (500).json (err);
    }
  };
  