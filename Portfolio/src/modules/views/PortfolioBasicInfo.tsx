import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '../components/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function PortfolioBasicInfo() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden' }}
    >
      <Container sx={{ mt: 15, mb: 15, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/img/code.svg"
                alt="code"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Developer
              </Typography>
              <Typography variant="h5">
                Skilled at C#, Java, Python and SQL to create web, networking and machine learning programs. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/img/bug.svg"
                alt="bug"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Testing
              </Typography>
              <Typography variant="h5">
                Proficient at unit testing to 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/img/school.svg"
                alt="school"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Education
              </Typography>
              <Typography variant="h5">
                Studying for a Bachelor of Science in Computer Science and Mathematics at Victoria University of Wellington.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PortfolioBasicInfo;
