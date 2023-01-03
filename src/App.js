import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const App = () => {
  return (
    <>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera/>
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBotto >
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone, this is a photo album and I'm trying to make this sentence as long as posible to see how it fits on the screen.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
