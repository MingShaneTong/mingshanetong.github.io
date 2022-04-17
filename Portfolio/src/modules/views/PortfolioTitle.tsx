import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import PortfolioTitleLayout from './PortfolioTitleLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1529661197280-63dc545366c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';

export default function PortfolioTitle() {
  return (
    <PortfolioTitleLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#b8afae', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Ming Shane Tong
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Full Stack Web Development with a strong interest in machine learning and data analysis
      </Typography>
    </PortfolioTitleLayout>
  );
}
