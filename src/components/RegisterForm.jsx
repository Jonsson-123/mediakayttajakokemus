import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useUser} from '../hooks/apiHooks';
import {Button, TextField} from '@mui/material';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {registerForm} from '../utils/errorMessages';
import {registerValidators} from '../utils/validators';

const RegisterForm = (props) => {
  const {postUser, getCheckUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = async () => {
    try {
      const userResult = postUser(inputs);
      alert(userResult.message);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleUsername = async () => {
    try {
      const {available} = await getCheckUser(inputs.username);
      available || alert('Username unavailable');
    } catch (error) {
      alert(error.message);
    }
  };
  const {inputs, handleSubmit, handleInputChange} = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <ValidatorForm onSubmit={handleSubmit} noValidate>
        <TextValidator
          fullWidth
          margin="dense"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={inputs.username}
          onBlur={handleUsername}
          validators={registerValidators.username}
          errorMessages={registerForm.username}
        />
        <TextValidator
          fullWidth
          margin="dense"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={inputs.password}
          validators={registerValidators.password}
          errorMessages={registerForm.password}
        />
        <TextValidator
          fullWidth
          margin="dense"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={inputs.email}
          validators={registerValidators.email}
          errorMessages={registerForm.email}
        />
        <TextValidator
          fullWidth
          margin="dense"
          name="full_name"
          placeholder="Full name"
          onChange={handleInputChange}
          value={inputs.full_name}
        />
        <Button fullWidth sx={{mt: 1}} type="submit" variant="contained">
          {' '}
          Register
        </Button>
      </ValidatorForm>
    </>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
