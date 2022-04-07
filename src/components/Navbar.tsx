import React from 'react'
import { useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';




  

function Navbar() {
  let navigate = useNavigate();
  const pages = ["repos1", "repos2", "add"]
  const handleRoute =(p: any) => {
    navigate(`/${p}`)
  }
    return (
        <AppBar sx={{marginBottom: "15px" }} position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                onClick={() => navigate("/")}
              >
                WEB-REACT-APP
              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
               
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={() => navigate("/")}
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                WEB-REACT-APP
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleRoute(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
                  
              </Box>
    
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="LOGIN">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="" src="../avatar.png" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
}

export default Navbar