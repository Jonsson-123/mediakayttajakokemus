import React from 'react';
import PropTypes from 'prop-types';
import {Box, Button} from '@mui/material';

const Upload = (props) => {
  return (
    <Box>
      <form>
        <input type="text" name="title" value="title" />
        <textarea name="textarea"></textarea>
        <input type="file" name="file" accept="image/* video/* audio/*" />
        <Button type="submit">Upload</Button>
      </form>
    </Box>
  );
};

Upload.propTypes = {};

export default Upload;
