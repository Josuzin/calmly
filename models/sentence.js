import mongoose from "mongoose";

const SentenceSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Sentence =
  mongoose.models.Sentence || mongoose.model("Sentence", SentenceSchema);
export default Sentence;
