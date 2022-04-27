import {
  Event,
  GifBoxOutlined,
  Image,
  LocationOn,
  Mood,
  StarPurple500,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  CardContent,
  CardMedia,
  Card,
  Input,
  Skeleton,
  Typography,
  CardHeader,
  IconButton,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';

import '../../styles/GlobalStyles.css';
import React from 'react';

interface MediaProps {
  loading?: boolean;
}

export default function Main(props: MediaProps) {
  const { loading = true } = props;

  return (
    <Box
      flexDirection="column"
      display="flex"
      flex={1}
      sx={{
        borderLeft: '1px solid #7a7a7a',
        borderRight: '1px solid #7a7a7a',
        overflowY: 'scroll',
      }}
    >
      <Box
        bgcolor="#000"
        position="fixed"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={1.5}
        sx={{
          width: '630px',
        }}
        color="#d9d9d9"
        fontSize="22px"
      >
        Página inicial
        <StarPurple500 color="info" />
      </Box>
      <Box
        paddingLeft="10px"
        alignItems="center"
        display="flex"
        width="100%"
        height="130px"
        mt="58px"
        borderBottom="1px solid #7a7a7a"
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56, marginTop: '-30px' }}
        />
        <Box display="flex" flexDirection="column">
          <Input
            placeholder="O que está acontecendo?"
            sx={{
              color: '#7a7a7a',
              marginLeft: '15px',
            }}
          />
          <Divider />
          <Box
            mt="15px"
            ml={2}
            width="500px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex">
              <Box mr="5px">
                <Image color="info" />
              </Box>

              <Box mr="5px">
                <GifBoxOutlined color="info" />
              </Box>
              <Box mr="5px">
                <PollOutlinedIcon color="info" />
              </Box>
              <Box mr="5px">
                <Mood color="info" />
              </Box>
              <Box mr="5px">
                <Event color="info" />
              </Box>
              <Box
                mr="5px"
                sx={{
                  opacity: 0.5,
                }}
              >
                <LocationOn color="info" />
              </Box>
            </Box>
            <Box>
              <Button variant="contained">Tweetar</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Card sx={{ background: '#7a7a7a', maxWidth: '100%', m: 2 }}>
          <CardHeader
            avatar={
              loading ? (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              ) : (
                <Avatar
                  alt="Ted talk"
                  src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                />
              )
            }
            action={
              loading ? null : <IconButton aria-label="settings"></IconButton>
            }
            title={
              loading ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                'Ted'
              )
            }
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                '5 hours ago'
              )
            }
          />
          {loading ? (
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}
          <CardContent>
            {loading ? (
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            ) : (
              <Typography variant="body2" color="text.secondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>
            )}
          </CardContent>
        </Card>
        <Card sx={{ background: '#7a7a7a', maxWidth: '100%', m: 2 }}>
          <CardHeader
            avatar={
              loading ? (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              ) : (
                <Avatar
                  alt="Ted talk"
                  src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                />
              )
            }
            action={
              loading ? null : <IconButton aria-label="settings"></IconButton>
            }
            title={
              loading ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                'Ted'
              )
            }
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                '5 hours ago'
              )
            }
          />
          {loading ? (
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}
          <CardContent>
            {loading ? (
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            ) : (
              <Typography variant="body2" color="text.secondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>
            )}
          </CardContent>
        </Card>
        <Card sx={{ background: '#7a7a7a', maxWidth: '100%', m: 2 }}>
          <CardHeader
            avatar={
              loading ? (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              ) : (
                <Avatar
                  alt="Ted talk"
                  src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                />
              )
            }
            action={
              loading ? null : <IconButton aria-label="settings"></IconButton>
            }
            title={
              loading ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                'Ted'
              )
            }
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                '5 hours ago'
              )
            }
          />
          {loading ? (
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}
          <CardContent>
            {loading ? (
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            ) : (
              <Typography variant="body2" color="text.secondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>
            )}
          </CardContent>
        </Card>
        <Card sx={{ background: '#7a7a7a', maxWidth: '100%', m: 2 }}>
          <CardHeader
            avatar={
              loading ? (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              ) : (
                <Avatar
                  alt="Ted talk"
                  src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                />
              )
            }
            action={
              loading ? null : <IconButton aria-label="settings"></IconButton>
            }
            title={
              loading ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                'Ted'
              )
            }
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                '5 hours ago'
              )
            }
          />
          {loading ? (
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}
          <CardContent>
            {loading ? (
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            ) : (
              <Typography variant="body2" color="text.secondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
