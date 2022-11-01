import express from 'express';
import {
  postMind,
  getllPost,
  updatePost,
  deletePost,
  findPpost,
  Timeline,
  likes,
} from '../controllers/mindPost.js';


const router = express.Router ();

router.post ('/', postMind);
router.get ('/', getllPost);
router.get ('/:id', findPpost);
router.put ('/:id', updatePost);
router.put ('/likes/:id', likes);
router.delete ('/:id', deletePost);
router.get ('/timeline/all/:userIdd', Timeline);

export default router;