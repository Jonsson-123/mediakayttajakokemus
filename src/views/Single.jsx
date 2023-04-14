import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {useState} from 'react';
import {useEffect} from 'react';
import {useFavourite, useUser} from '../hooks/apiHooks';

const Single = () => {
  const [owner, setOwner] = useState({username: ''});
  const {getUser} = useUser();
  const {state} = useLocation();
  const {getFavourites} = useFavourite();
  const file = state.file;

  let allData = {
    desc: file.description,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      sepia: 0,
    },
  };
  try {
    allData = JSON.parse(file.description);
  } catch (error) {
    /* Empty */
  }

  let componentType = 'img';

  switch (file.media_type) {
    case 'video':
      componentType = 'video';
      break;
    case 'audio':
      componentType = 'audio';
      break;
  }

  const fetchUser = async () => {
    try {
      const userToken = localStorage.getItem('userToken');
      const ownerInfo = await getUser(file.user_id, userToken);
      setOwner(ownerInfo);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchLikes = async () => {
    try {
      const likeInfo = await getFavourites(file.file_id);
      console.log(likeInfo);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchLikes();
  }, []); // jos taulukko tyhjä, ajetaan vain kerran, kun sivu ladataan

  return (
    <>
      <Typography component="h1" variant="h3">
        {file.title}
      </Typography>
      <Card>
        <CardMedia
          controls={true}
          poster={mediaUrl + file.screenshot}
          component={componentType}
          src={mediaUrl + file.filename}
          title={file.title}
          style={{
            width: '100%',
            height: 400,
            filter: `
            brightness(${allData.filters.brightness}%)
            contrast(${allData.filters.contrast}%)
            saturate(${allData.filters.saturation}%)
            sepia(${allData.filters.sepia}%)
            `,
            backgroundImage: file.media_type === 'audio' && `url(vite.svg)`,
          }}
        />
        <CardContent>
          <Typography variant="body1">{allData.desc}</Typography>
          <Typography variant="body2">By: {owner.username}</Typography>
          <Typography variant="body2">Likes: 22</Typography>

          <ButtonGroup>
            <Button>Like</Button>
            <Button disabled={true}>Dislike</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;
