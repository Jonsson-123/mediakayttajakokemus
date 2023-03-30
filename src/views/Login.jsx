import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {Grid} from '@mui/material';

const Login = (props) => {
  const [formToggle, setFormToggle] = useState(true);
  const toggle = () => {
    setFormToggle(!formToggle);
  };
  return (
    <Grid container direction={'column'} alignItems="center">
      <Grid item xs={6}>
        {formToggle ? <LoginForm /> : <RegisterForm />}
      </Grid>
      <Grid item xs={6}>
        <p>{formToggle ? 'First time here?' : 'or'}</p>
      </Grid>
      <Grid item xs={12}>
        <button onClick={toggle}> {formToggle ? 'Register' : 'Login'}</button>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
