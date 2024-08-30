import mongoose from 'mongoose';

let Meditation;

try {
  // Try to retrieve the existing model
  Meditation = mongoose.model('Meditation');
} catch (error) {
  // If the model doesn't exist, define it
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
  });

  Meditation = mongoose.model('Meditation', meditationSchema);
}

export default Meditation;
