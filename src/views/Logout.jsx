import React from 'react';
import {Navigate} from 'react-router-dom';

const Logout = (props) => {
  localStorage.removeItem('userToken');
  return <Navigate to="/" />;
};

export default Logout;
