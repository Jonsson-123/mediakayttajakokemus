import {ImageList} from '@mui/material';
import PropTypes from 'prop-types';
import {useMedia} from '../hooks/apiHooks';
import {useWindowSize} from '../hooks/WindowHooks';
import MediaRow from './MediaRow';

const MediaTable = () => {
  const {mediaArray} = useMedia();
  const windowSize = useWindowSize();

  return (
    <ImageList cols={windowSize.width > 768 ? 3 : 2} gap={8}>
      {mediaArray.map((item, index) => {
        return <MediaRow key={index} file={item} />;
      })}
    </ImageList>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
