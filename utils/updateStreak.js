import User from "./models/user";

export const updateMeditationStreak = async (userId, date) => {
  const user = await User.findOne({  userId });
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if(!user){
    throw new Error("User not found");
  }

  const lastMeditationDate = new Date (user.lastMeditationDate);
  lastMeditationDate.setHours(0, 0, 0, 0);

  if( today.getTime() === lastMeditationDate.getTime()){
    return user
  }

  const oneDay = 24 * 60 * 60 * 1000;
  if(today.getTime() - lastMeditationDate.getTime() === oneDay){
    user.meditationStreak += 1;
  }else {
    user.meditationStreak = 0;
  }
  user.lastMeditationDate.push(today);
  user.lastMeditationDate = today;
  return user
};

