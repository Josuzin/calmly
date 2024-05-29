// import mongoose, { Schema } from "mongoose";

// const userSchema = new Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//       unique: true, // Ensure email addresses are unique
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     meditationDates: {
//       type: [Date],
//       default: [],
//     },
//     currentStreak: {
//       type: Number,
//       default: 0,
//     },
//     lastMeditationDate: {
//       type: Date,
//       default: null,
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;
