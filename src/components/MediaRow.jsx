import React from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {Link} from 'react-router-dom';
import {Button, ImageListItem, ImageListItemBar} from '@mui/material';

const MediaRow = ({file}) => {
  return (
    <ImageListItem>
      <img
        src={
          file.media_type !== 'audio'
            ? mediaUrl + file.thumbnails?.w640
            : '/vite.svg'
        }
        alt={file.title}
      />
      <ImageListItemBar
        title={file.title}
        subtitle={file.description}
        actionIcon={
          <Button
            component={Link}
            variant="contained"
            to="/single"
            state={{file}}
          >
            View
          </Button>
        }
      />
    </ImageListItem>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default MediaRow;
