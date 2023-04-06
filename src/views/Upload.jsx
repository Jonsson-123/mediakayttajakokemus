import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Button} from '@mui/material';
import useForm from '../hooks/FormHooks';
import {useMedia} from '../hooks/apiHooks';
import {useNavigate} from 'react-router-dom';

const Upload = (props) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const {postMedia} = useMedia();
  const initValues = {
    title: '',
    description: '',
  };

  const doUpload = async () => {
    try {
      const data = new FormData();
      data.append('title', inputs.title);
      data.append('description', inputs.description);
      data.append('file', file);
      const userToken = localStorage.getItem('userToken');
      const uploadResult = await postMedia(data, userToken);
      console.log('doUpload', uploadResult);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFileChange = (event) => {
    event.persist();
    setFile(event.target.files[0]);
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doUpload,
    initValues
  );

  console.log('upload', inputs);

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="title"
          value={inputs.title}
        />
        <textarea
          onChange={handleInputChange}
          name="description"
          value={inputs.description}
        ></textarea>
        <input
          onChange={handleFileChange}
          type="file"
          name="file"
          accept="image/*,video/*,audio/*"
        />
        <Button type="submit">Upload</Button>
      </form>
    </Box>
  );
};

Upload.propTypes = {};

export default Upload;
