import mongoose from 'mongoose';
const postSchema = new mongoose.Schema (
  {
    image: {
      type: String,
      required: false,
    },

    desc: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    comment: {
      type: Array,
      default: []
    },
  },
  {timestamps: true}
);
export default mongoose.model ('Mindpost', postSchema);