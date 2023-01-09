import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const footertheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
      textTransform: 'none',
      color: '#a8b2d1',
      margin: '0px 0px 30px 4px',
      fontSize: '0.875rem',
      fontWeight: '400',
    },
  },
});

const Footer = () => {
  return (
    <>
      <Box
        component="section"
        id="footer"
        sx={{ paddingBottom: '0', maxWidth: '600px', margin: '0px auto 100px', textAlign: 'center' }}
      >
        <Box className='footer_social' sx={{ display: {xs: 'block', md: 'none', width: '100%' , maxWidth: '270px', margin: '0 auto 10px' , color: '#a8b2d1'}}}>
          <ul>
            <li><a href='https://github.com/tinmyowintmw6' rel='noreferrer' target={'_blank'}><GitHubIcon /></a></li>
            <li><a href='https://www.instagram.com/tinmyowin_tmw/' rel='noreferrer' target={'_blank'}><InstagramIcon /></a></li>
            <li><a href='https://www.facebook.com/tin.myo.win.3389/' rel='noreferrer' target={'_blank'}><FacebookIcon /></a></li>
            <li><a href='https://twitter.com/tinmyowintmw6' rel='noreferrer' target={'_blank'}><TwitterIcon /></a></li>
            <li><a href='https://www.linkedin.com/in/tin-myo-win-7b2986184/' rel='noreferrer' target={'_blank'}><LinkedInIcon /></a></li>
          </ul>
        </Box>
        <ThemeProvider theme={footertheme}>
          <Box sx={{}}>
            <Typography variant='body1' sx={{}}>
              Develop & Built by Tin Myo Win.Eric<br></br>
              Frontend Developer
            </Typography>
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default Footer;