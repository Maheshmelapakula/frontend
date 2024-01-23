// src/redux/reducers/authReducer.js
const initialState = {
    token: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP_SUCCESS':
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload,
          error: null,
        };
      case 'SIGNUP_FAILURE':
      case 'LOGIN_FAILURE':
        return {
          ...state,
          token: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  