import * as React from 'react';
import Layout, { BarItem } from "pages/Layout";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from 'modules/components/Typography';
import AppForm from 'modules/views/AppForm';
import { email, required } from 'modules/form/validation';
import RFTextField from 'modules/form/RFTextField';
import FormButton from 'modules/form/FormButton';
import FormFeedback from 'modules/form/FormFeedback';
import withRoot from 'modules/withRoot';

function Contact() {
  return (
    <Layout item={BarItem.Contact}>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Contacts
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="72vh"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfSqn_5UoSdcKWcyhodI67OSc5NJzanBWBUWlTaerBdt__oyw/viewform?embedded=true"
          width="640"
          height="1080"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </Box>
    </Layout>
  );
}

export default withRoot(Contact);
