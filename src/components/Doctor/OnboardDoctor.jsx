// src/components/Doctor/OnboardDoctor.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onboardDoctorAction } from '../../redux/actions/doctorActions';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';

const OnboardDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState('');
  const [fee, setFee] = useState('');

  const handleOnboardDoctor = () => {
    dispatch(
      onboardDoctorAction({
        name,
        image,
        specialization,
        experience,
        location,
        date,
        slots,
        fee,
      })
    )
      .then(() => {
        navigate('/doctor-dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box p={4} maxW="md" borderWidth="1px" borderRadius="md">
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Specialization</FormLabel>
          <Select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </Select>
        </FormControl>

        {/* Additional form fields for other details */}
        
        <Button colorScheme="teal" onClick={handleOnboardDoctor}>
          Onboard Doctor
        </Button>
      </Stack>
    </Box>
  );
};

export default OnboardDoctor;
