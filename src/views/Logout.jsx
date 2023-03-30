import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';

const Logout = (props) => {
  localStorage.removeItem('userToken');
  const {setUser} = useContext(MediaContext);
  setUser(null);
  return <Navigate to="/" />;
};

export default Logout;
