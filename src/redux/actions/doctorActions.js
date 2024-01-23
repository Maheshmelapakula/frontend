// src/redux/actions/doctorActions.js
import axios from 'axios';

// Action Types
export const ONBOARD_DOCTOR_SUCCESS = 'ONBOARD_DOCTOR_SUCCESS';
export const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';
export const DELETE_DOCTOR_SUCCESS = 'DELETE_DOCTOR_SUCCESS';
export const UPDATE_DOCTOR_SUCCESS = 'UPDATE_DOCTOR_SUCCESS';

// Action Creators
export const onboardDoctorAction = (doctorData) => async (dispatch) => {
  try {
    // Send a request to your backend API to onboard the doctor
    const response = await axios.post('/api/doctors', doctorData);

    dispatch({
      type: ONBOARD_DOCTOR_SUCCESS,
      payload: response.data,
    });

    return response.data; // Assuming your backend returns the newly onboarded doctor
  } catch (error) {
    console.error('Error onboarding doctor:', error);
    throw error;
  }
};

export const fetchDoctorsAction = () => async (dispatch) => {
  try {
    // Send a request to your backend API to fetch all doctors
    const response = await axios.get('/api/doctors');

    dispatch({
      type: FETCH_DOCTORS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const deleteDoctorAction = (doctorId) => async (dispatch) => {
  try {
    // Send a request to your backend API to delete the doctor
    await axios.delete(`/api/doctors/${doctorId}`);

    dispatch({
      type: DELETE_DOCTOR_SUCCESS,
      payload: doctorId,
    });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    throw error;
  }
};

export const updateDoctorAction = (doctorId, updatedData) => async (dispatch) => {
  try {
    // Send a request to your backend API to update the doctor
    const response = await axios.put(`/api/doctors/${doctorId}`, updatedData);

    dispatch({
      type: UPDATE_DOCTOR_SUCCESS,
      payload: response.data,
    });

    return response.data; // Assuming your backend returns the updated doctor
  } catch (error) {
    console.error('Error updating doctor:', error);
    throw error;
  }
};
