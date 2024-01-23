// src/components/Auth/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { loginAction, registerAction } from '../../redux/actions/authActions';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const authError = useSelector((state) => state.auth.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // New state to track form mode


  const handleAction = () => {
    const apiEndpoint = 'http://localhost:3001/auth/login';
    const requestData = { email, password };
  
    if (isRegistering) {
      dispatch(registerAction(requestData))
        .then(() => {
          // handle successful registration
          navigate('/onboard-doctor')
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // For login, make an HTTP request to the login API
      axios.post(apiEndpoint, requestData)
        .then((response) => {
          // Assuming the backend sends a token upon successful login,
          // you may want to handle the token here (e.g., store it in local storage)
          const token = response.data.token;
  
          // handle successful login
          navigate('/onboard-doctor');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  

  const toggleFormMode = () => {
    setIsRegistering((prevMode) => !prevMode);
  };

  return (
    <Box p={4} maxW="md" borderWidth="1px" borderRadius="md">
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {authError && <Text color="red.500">Error: {authError}</Text>}

        <Button colorScheme="teal" onClick={handleAction}>
          {isRegistering ? 'Register' : 'Login'}
        </Button>

        <Text>
          {isRegistering
            ? 'Already have an account?'
            : 'Don\'t have an account?'}
          <Button variant="link" onClick={toggleFormMode}>
            {isRegistering ? 'Login' : 'Register'}
          </Button>
        </Text>
      </Stack>
    </Box>
  );
};

export default Login;
