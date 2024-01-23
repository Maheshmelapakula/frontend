// src/redux/reducers/doctorReducer.js
const initialState = {
    onboardedDoctors: [],
    error: null,
  };
  
  const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ONBOARD_DOCTOR_SUCCESS':
        return {
          ...state,
          onboardedDoctors: [...state.onboardedDoctors, action.payload],
          error: null,
        };
      case 'ONBOARD_DOCTOR_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default doctorReducer;
  