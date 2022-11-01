import mongoose from 'mongoose';

const commentSchema = mongoose.Schema ({
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Comment', commentSchema)