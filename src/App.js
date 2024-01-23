// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import OnboardDoctor from './components/Doctor/OnboardDoctor';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          {/* Wrap your Routes with the <Routes> element */}
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboard-doctor" element={<OnboardDoctor />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
