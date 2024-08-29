import mongoose from 'mongoose';

const meditationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  imgSrc: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  audioSrc: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: Number,
    integer: true,
    required: true
  },
  categories: [
    {
      type: String,
      required: true,
      trim: true
    }
  ],
  tags: [
    {
      type: String,
      required: true,
      trim: true
    }
  ]
}, { strict: true });

meditationSchema.index
export default mongoose.model('Meditation', meditationSchema);
