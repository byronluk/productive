import initialState from '../initial-state';

export default function habitsReducer(state = initialState.habits, action) {
  const habitsCopy = state.slice();
  
  switch (action.type) {

    case 'ADD_HABIT':
      habitsCopy.push(action.habit);
      return habitsCopy;

    default:
      return state;
  }
}