import mongoose from 'mongoose';

const MeditationSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
    title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Meditation || mongoose.model('Meditation', MeditationSchema);
