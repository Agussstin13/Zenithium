import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

export default function Footer(){
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor: '#030344' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" color="inherit">
              © 2025 Zenithium
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="inherit">
              <TermsAndConditions/> <PrivacyPolicy/>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};