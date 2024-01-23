import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction, signupAction } from '../../redux/actions/authActions';
import axios from 'axios';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthAction = () => {
    if (isLogin) {
      dispatch(loginAction({ email, password }))
        .then(() => navigate('/onboard-doctor'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(
          'http://localhost:3001/auth/signup',
          { email, password, confirmPassword },
          { withCredentials: true }
        )
        .then((response) => {
          // Dispatch your redux action here if needed
          // dispatch(signupAction(response.data));
  
          // Navigate to the next page (example: /onboard-doctor)
          navigate('/onboard-doctor');
        })
        .catch((error) => {
          console.error(error);
          // Handle errors and update your Redux store with the error message if needed
          // dispatch(setErrorAction(error.message));
        });
    }
  };
  

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box p={4} maxW="md" borderWidth="1px" borderRadius="md">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab
              onClick={() => setIsLogin(true)}
              _hover={{ bg: 'teal.100', cursor: 'pointer' }}
            >
              Login
            </Tab>
            <Tab
              onClick={() => setIsLogin(false)}
              _hover={{ bg: 'teal.100', cursor: 'pointer' }}
            >
              Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
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

                {authError && (
                  <Text color="red.500">Error: {authError}</Text>
                )}

                <Button colorScheme="teal" onClick={handleAuthAction}>
                  Login
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel>
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

                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormControl>

                {authError && (
                  <Text color="red.500">Error: {authError}</Text>
                )}

                <Button colorScheme="teal" onClick={handleAuthAction}>
                  Signup
                </Button>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default AuthForm;
