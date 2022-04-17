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
                I love to solve problem and construct efficient solutions using computer science and mathematics. I am fond of utilizing and exploring different algorithms that work with data to overcomes difficult challenges. I am motivated by the lessons that I learn from working on a range of projects teaching me skills that I can carry into my next challenge. I like what I make to focus on the end-user and the development team which means I value simplicity, security, and usability.
              </p>
            </Grid>
            <Grid item md={6}>
              <p style={{ margin: "0" }}>
                I love learning how to use new technologies. I can adapt quickly and pick up new frameworks by reading documentation, analyzing the examples and consulting mentors. I am constantly iterating on what I learn and using new knowledge, discoveries as well as mistakes to craft and improve my application. During my employment, I learnt how to create Windows Services through documentation and code examples to create automated tasks. I applied what I had learnt to create a program to monitor software environment to ensure that they are healthy. 
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
     </Box>
  );
}
