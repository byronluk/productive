import { database } from '../firebase';

export const startListeningForHabits = (habit) => {
  return {
    type: 'ADD_HABIT',
    habit,
  };
};

export const incrementDailyProgress = (habitId) => {
  
  return (dispatch, getState) => {
    const { auth, habits } = getState();
    var currentUserRef = database.ref(`users/${auth.uid}/habits/${habitId}`);
    var currentProgress = findHabit(habitId, habits).dailyProgress;
    currentProgress += 1;
    
    currentUserRef.update({ dailyProgress: currentProgress }).then((a) => console.log(a));
  };
};

//  helper function to find targeted habit in array
const findHabit = (habitId, habits) => {
  for (let habit of habits) {
    if (habitId === habit.habitId) {
      return habit;
    }
  }
};

export const startListeningForHabitChanges = () => {

};
