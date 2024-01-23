// src/redux/actions/authActions.js
import axios from 'axios';

export const signupAction = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/signup', userData);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data.token });
    } catch (error) {
      dispatch({ type: 'SIGNUP_FAILURE', payload: error.message });
      throw error;
    }
  };
};

export const loginAction = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/login', userData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.token });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
      throw error;
    }
  };
};
export const registerAction = (userData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('/api/register', userData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: response.data.token });
      } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
        throw error;
      }
    };
  };