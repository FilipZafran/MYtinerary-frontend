import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_MEH
} from "../actions/userActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case CREATE_USER_SUCCESS:
      console.log("user created", action.payload);
      return {
        // SPREAD OPERATOR - makes a copy of after ...
        // basically state = initialState
        ...state,
        // we dont change loading
        loading: false,
        // we add data to items / action up in () / in userAction
        items: action.payload.signup
      };

    case CREATE_USER_MEH:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
