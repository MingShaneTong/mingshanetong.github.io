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

function PortfolioSkills() {
  return (
    <Box
      component="section"
      sx={{
        mt: 10,
        mb: 15,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" marked="center" component="h2">
        Skills
      </Typography>
      <Container
        sx={{
          mt: 6,
          mb: 8,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ margin: "0 32px" }}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Box
                component="img"
                src="/img/code.svg"
                alt="code"
                sx={{ height: 60 }}
              />
              <Typography variant="h5" sx={{ mb: 1, fontSize: 24, fontWeight: 'medium' }}>
                Languages
              </Typography>

              <Typography variant="h5" sx={{ mb: 0, fontWeight: 'medium' }}>
                C#
              </Typography>
              <p style={{ margin: "0" }}>Utilized C# on the projects at FNZ to create full‑stack websites, Windows Service apps and unit testing modules.</p>


              <Typography variant="h5" sx={{ mb: 0, fontWeight: 'medium' }}>
                Java
              </Typography>
              <p style={{ margin: "0" }}>Gained an understanding of parallel programs, machine learning algorithms and network programs by using Java in university projects. </p>
              
              <Typography variant="h5" sx={{ mt: 2, mb: 0, fontWeight: 'medium' }}>
                Python
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, mb: 0, fontWeight: 'medium' }}>
                SQL
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, mb: 0, fontWeight: 'medium' }}>
                C
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, mb: 0, fontWeight: 'medium' }}>
                C++
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, mb: 0, fontWeight: 'medium' }}>
                JavaScript
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box
                component="img"
                src="/img/tool.svg"
                alt="tool"
                sx={{ height: 60 }}
              />
              <Typography variant="h5" sx={{ mb: 1, fontSize: 24, fontWeight: 'medium' }}>
                Tools
              </Typography>

              <Typography variant="h5" sx={{ mb: 0, fontWeight: 'medium' }}>
                Git
              </Typography>
              <Typography variant="h5" sx={{ mb: 0, fontWeight: 'medium' }}>
                Amazon Web Services
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Button
        color="secondary"
        size="large"
        variant="contained"
        component="a"
        href="/project"
        sx={{
          mt: 8,
          m: "0 auto"
        }}
      >
        View My Projects
      </Button>
    </Box>
  );
}

export default PortfolioSkills;
