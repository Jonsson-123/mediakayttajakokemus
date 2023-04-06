import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';

const Upload = (props) => {
  return (
    <Box>
      <form>
        <input type="text" name="title" value="title" />
        <textarea name="textarea"></textarea>
        <input type="file" name="file" />
      </form>
    </Box>
  );
};

Upload.propTypes = {};

export default Upload;
