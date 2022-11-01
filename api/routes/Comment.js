import express from 'express';
import {
  postComment,
  getllComment,
  updateComment,
  deleteComment,
  allComment,
} from '../controllers/comment.js';

const router = express.Router ();

router.post ('/:postId', postComment);
router.get ('/:postId/getcomment', getllComment);
router.get ('/', allComment);
router.put ('/:id', updateComment);
router.delete ('/:id', deleteComment);

export default router;
