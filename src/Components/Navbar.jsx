import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/Images/logoNavbar.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const pages = ['Sobre Nosotros', 'Contactanos'/*, 'Blog'*/];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleScrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } 
    setTimeout(() => {
      let contactSection = document.getElementById('ContactUs');
      if (contactSection) {
        let yOffset = contactSection.getBoundingClientRect().top + window.scrollY - 68.5;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
      setAnchorElNav(null);
    }, 100);
  }
  

  const handleScrollToAboutUs = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } 
    setTimeout(() => {
      let AboutSection = document.getElementById('AboutUs');
      if (AboutSection) {
        let yOffset = AboutSection.getBoundingClientRect().top + window.scrollY - 68.5;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
      setAnchorElNav(null);
    }, 100);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#030344', width: '100%' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="logo" style={{ height: '40px', objectFit: 'cover'}} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer"
            }}
          >
            Zenithium
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
                  <Typography sx={{ textAlign: 'center' }} onClick={page === 'Contactanos' ? handleScrollToContact : page === 'Sobre Nosotros' ? handleScrollToAboutUs : page === 'Blog' ? () => navigate('/blog') : null}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={logo} alt="logo" style={{ height: '60px' }} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Zenithium
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={page === 'Contactanos' ? handleScrollToContact : page === 'Sobre Nosotros' ? handleScrollToAboutUs : page === 'Blog' ? () => navigate('/blog') : null}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              href="http://www.linkedin.com/company/zenithium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
