import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';



function NavBar() {
    let userId = 5;
    
    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
      borderBottom: 'none',
      boxShadow:'none',
      textAlign:"left"
    
    }


    return (
      <div>
          <AppBar position="static">
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <div style={{ flexGrow: 1, textAlign: "left" }}>
                      <Typography variant="h6" component="div">
                          <Link to="/" style={linkStyle}>Home</Link>
                      </Typography>
                  </div>
                  <div>
                      <Typography variant="h6" component="div">
                          <Link to={{ pathname: '/users/' + userId }} style={linkStyle}>
                              User
                          </Link>
                      </Typography>
                  </div>
              </Toolbar>
          </AppBar>
      </div>
  );
        
}

export default NavBar;
