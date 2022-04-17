import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

export enum BarItem {
  Work,
  Project,
  Contact
}

interface BarProps {
  item?: BarItem
}

function AppAppBar(props: BarProps) {
  var primarysx = rightLink;
  var secondarysx = { ...rightLink, color: 'secondary.main' };

  var worksx = secondarysx;
  var projectsx = secondarysx;
  var contactsx = secondarysx;
  switch (props.item) {
    case BarItem.Work:
      worksx = primarysx;
      break;
    case BarItem.Project:
      projectsx = primarysx;
      break;
    case BarItem.Contact:
      contactsx = primarysx;
      break;
  }


  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/"
              sx={{ fontSize: 24 }}
            >
              {'Ming Shane Tong'}
            </Link>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/work-experience"
              sx={worksx}
            >
              {'Work Experience'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/project"
              sx={projectsx}
            >
              {'Projects'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/Contact"
              sx={contactsx}
            >
              {'Contacts'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;