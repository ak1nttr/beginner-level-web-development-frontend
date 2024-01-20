import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

 function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
          <Box sx={{ bgcolor: 'rgba(78,114,88,0.7)'
              , height: '100%'
              , position: 'fixed'
              , width: '75%'
              , zIndex: -   1
          }} />


      </Container>
    </React.Fragment>
  );
}
export default FixedContainer;