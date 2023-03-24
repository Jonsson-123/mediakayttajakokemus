import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useAuthentication} from '../hooks/apiHooks';

const LoginForm = (props) => {
  const {postLogin} = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      const loginResult = await postLogin(inputs);
      alert(loginResult.message);
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doLogin,
    initValues
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <button type="submit"> Login</button>
      </form>
    </>
  );
};
LoginForm.propTypes = {};

export default LoginForm;
