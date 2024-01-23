// redux/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import doctorReducer from './reducers/doctorReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  doctor: doctorReducer,
  // Add more reducers as needed
});

const store = createStore(rootReducer);

export default store;
