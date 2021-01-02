export const initialState = {
  userLogged: false,
  playing: false,
};

const reducer = (state, action) => {
  console.log(action); // action has -> Type & [payload]

  switch (action.type) {
    case "SET_USER":
      return { ...state, userLogged: action.userLogged }; // keeps the previous things and just changes the user

    default:
      return state;
  }
};

export default reducer;
