// models/Prompt.js
import { Schema, model, models } from "mongoose";

const promptSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    promptHistory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Prompt = models.Prompt || model('Prompt', promptSchema);
export default Prompt;
