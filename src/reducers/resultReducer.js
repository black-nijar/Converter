const initState = {};

export const resultReducer = (state = initState, action) => {
  switch (action.type) {
    case 'RESULT':
      return action.result;
    default:
      return state;
  }
}