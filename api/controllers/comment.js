import Comment from '../models/comment.js';
import Mindpost from '../models/Mindpost.js';
import Posts from '../models/Mindpost.js';

export const postComment = async (req, res) => {
  const PostsId = req.params.postId;
  try {
    const comment = new Comment (req.body);
    const saveComment = await comment.save ();
    try {
      await Posts.findByIdAndUpdate (PostsId, {
        $push: {comment: saveComment._id},
      });
    } catch (err) {
      res.status (500).json (err);
    }
    res.status (200).json (saveComment);
  } catch (err) {
    res.status (500).json (err);
  }
};

export const getllComment = async (req, res) => {
  const post = req.params.postId;
  try {
    const posts = await Mindpost.findById (post);
    const comment = await Promise.all (
      posts.comment.map (ecomment => {
        return Comment.find({_id:ecomment})
      })
    );
  


    if(comment){
      res.status (200).json (comment);

    }else{
      res.status (200).json ("no comment found");

    }

  } catch (err) {
    res.status (500).json (err);
  }
};



export const userwhoComment = async (req, res) => {
  const post = req.params.postId;
  try {
    const posts = await Mindpost.findById (post);
    const comment = await Promise.all (
      posts.comment.map (ecomment => {
        return Comment.find({_id:ecomment})
      })
    );
    if(comment){
      res.status (200).json (comment);

    }else{
      res.status (200).json ("no comment found");

    }

  } catch (err) {
    res.status (500).json (err);
  }
};


export const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate (
      req.params.id,
      {$set: req.body},
      {$new: true}
    );
    res.status (200).json (comment);
  } catch (err) {
    res.status (500).json (err);
  }
};

export const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete (req.params.id);
    res.status (200).json ('Comment has been deleted');
  } catch (err) {
    res.status (500).json (err);
  }
};


export const allComment = async (req, res) => {
  try {
   const comment= await Comment.find ();
    res.status (200).json (comment);
  } catch (err) {
    res.status (500).json (err);
  }
};
