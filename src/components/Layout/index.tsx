import {
  ArticleOutlined,
  Home,
  MailOutlineRounded,
  MoreHorizOutlined,
  MoreVertOutlined,
  NotificationsNone,
  PersonOutline,
  Search,
  Tag,
  TurnedInNot,
  Twitter,
} from '@mui/icons-material';
import {
  Container,
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Skeleton,
  Stack,
} from '@mui/material';

import Main from '../Main/Index';

export default function Layout() {
  return (
    <Box width="100%" height="100vh" bgcolor="#000">
      <Container
        maxWidth={'lg'}
        sx={{
          height: '100%',
        }}
      >
        <Box
          height="100%"
          margin="0 auto"
          display="flex"
          justifyContent="center"
        >
          <Box width="245px" height="100%" pr={3}>
            <List
              component="nav"
              sx={{
                width: '100%',
                height: '100%',
              }}
            >
              <Button>
                <Twitter color="info" />
              </Button>

              <ListItemButton>
                <ListItemIcon>
                  <Home color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Página inicial"
                  sx={{
                    color: '#33a1f2',
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Tag color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Explorar"
                  sx={{
                    color: '#33a1f2',
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <NotificationsNone color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Notificações"
                  sx={{
                    color: '#33a1f2',
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <MailOutlineRounded color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Mensagens"
                  sx={{
                    color: '#33a1f2',
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Itens salvos"
                  sx={{
                    color: '#33a1f2',
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ArticleOutlined color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Listas"
                  sx={{
                    color: '#33a1f2',
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <PersonOutline color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Perfil"
                  sx={{
                    color: '#33a1f2',
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <MoreHorizOutlined color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Mais"
                  sx={{
                    color: '#33a1f2',
                  }}
                />
              </ListItemButton>

              <Button
                variant="contained"
                sx={{
                  width: '100%',
                }}
              >
                Tweetar
              </Button>

              <Box
                position="absolute"
                bottom="15px"
                width="245px"
                left="-30px"
                right="0"
              >
                <ListItemButton>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Box ml="10px" mr="30px">
                    <Typography variant="subtitle2" color="#d9d9d9">
                      ZEDON
                    </Typography>
                    <Typography variant="body2" color="#7a7a7a">
                      @AlvesssssRafael
                    </Typography>
                  </Box>
                  <MoreHorizOutlined color="info" />
                </ListItemButton>
              </Box>
            </List>
          </Box>
          <Main />
          <Box width="275px" height="100%">
            <Container>
              <Box
                width="348px"
                height="40px"
                bgcolor="#202327"
                mb="15px"
                mt="10px"
                borderRadius="20px"
                display="flex"
                alignItems="center"
                color="#7a7a7a"
                pl="15px"
              >
                <Search />
                <Typography ml="15px">Buscar no Twitter</Typography>
              </Box>

              <Box
                py="5px"
                px="15px"
                bgcolor="#15181c"
                width="348px"
                height="350px"
                mb="15px"
                borderRadius="10px"
                display="flex"
              >
                <Box>
                  <Typography variant="h6" color="#d9d9d9">
                    O que está acontecendo
                  </Typography>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      width="315px"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                </Box>
              </Box>
              <Box
                py="5px"
                px="15px"
                bgcolor="#15181c"
                width="348px"
                height="400px"
                mb="15px"
                borderRadius="10px"
                display="flex"
              >
                <Box>
                  <Typography variant="h6" color="#d9d9d9">
                    Quem seguir
                  </Typography>
                  <Stack>
                    <Skeleton
                      variant="text"
                      width="315px"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Skeleton
                      variant="text"
                      sx={{
                        background: '#7a7a7a',
                      }}
                    />
                  </Stack>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" color="#7a7a7a" ml="15px">
                  Termos de Serviço Política de Privacidade Política de cookies
                  Acessibilidade Informações de anúncios Mais © 2022 Twitter,
                  Inc.
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
