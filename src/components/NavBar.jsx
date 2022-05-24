import React from 'react'
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const NavBar = () => {

    return (
        <Box>
      <AppBar className="NavBar" position="static">
        <Toolbar
        sx={{
          color: "#B8B272",
          fontFamily: "serif",
            backgroundColor: "#090a12",
            '& .Button': {
            
              textTransform: "red",
              color: "red"
            },
          }}
          >
          
          <NavLink to="coding">
            <Button color="inherit">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Coding
            </Typography>
            </Button>
          </NavLink>

          <NavLink to="football">
            <Button color="inherit">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Football
            </Typography>
            </Button>
          </NavLink>

          <NavLink to="/cooking">
            <Button color="inherit">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Cooking
              </Typography>
            </Button>
          </NavLink>
          
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar;