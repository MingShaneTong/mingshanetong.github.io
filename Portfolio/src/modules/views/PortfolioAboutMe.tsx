import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';


export default function PortfolioAboutMe() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container component="section" sx={{ mt: 8, mb: 12 }}>
        <Typography variant="h4" marked="center" align="center" component="h2" sx={{ mb: 6 }}>
          About Me
        </Typography>
        <div style={{ margin: "0 32px" }}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <p style={{ margin: "0" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat pellentesque maximus. Morbi diam erat, auctor ut blandit in, pretium eu velit. Vestibulum vitae odio sit amet leo mollis accumsan a sit amet quam. Maecenas pharetra sem porttitor turpis rhoncus consectetur. Cras ac purus egestas nunc dapibus mollis. Vivamus aliquet nisl sapien, ut molestie nulla bibendum quis. Nulla ac consequat eros, faucibus bibendum elit. Donec tincidunt enim id dui elementum, in porta sem aliquam. Praesent egestas purus vel mattis congue.
              </p>
            </Grid>
            <Grid item md={6}>
              <p style={{ margin: "0" }}>
                Sed varius venenatis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam volutpat dui eu arcu varius pellentesque. Nam a dolor et nisi egestas tempus. In nulla nulla, lobortis at orci ut, ultrices tempus risus. Duis maximus quis dui nec finibus. Vestibulum rutrum facilisis sem quis pharetra. Quisque varius odio a urna blandit, ac auctor lorem molestie. Sed lacus lacus, finibus id consequat ut, cursus eu magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque blandit neque leo, sit amet tempus magna molestie a. Donec ut justo enim.
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
     </Box>
  );
}
