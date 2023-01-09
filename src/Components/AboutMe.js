import * as React from "react";
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

};

// const skill = createTheme({
//   typography: {
//     allVariants: {
//       fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
//       fontSize: '13px',
//       listStyle: 'none',
//       =
//     }
//   }
// })

const abouthteme = createTheme({
  typography: {
    allVariants: {
      textTransform: 'none',
      color: '#ffffff',
      margin: '0px 0px 30px 4px',
      fontSize: 'clamp(20px, 8vw, 30px)',
      fontWeight: '600',
      maxWidth: '900px',
    },
  },
});

const AboutMe = () => {
  return (
    <>
      <ThemeProvider theme={abouthteme}>
        <Box
          component="section"
          id="aboutme"
        >
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <Typography variant="h1" className="number-about" sx={{ display: 'flex', position: 'relative', alignItems: 'center', margin: '10px 0px 40px', width: '100%', whiteSpace: 'nowrap' }}>
              About Me
            </Typography>
          </AnimationOnScroll>
          <Grid container >
            <Grid item xs={12} md={8}>
              <Box sx={item}>
                <AnimationOnScroll animateIn="animate__fadeInDown">
                  <Typography variant="body1" sx={{ my: 5, fontSize: 'clamp(12px, 8vw, 16px)', color: '#8892b0' }}>
                    Web Developer with over 6-years of experience in the development of innovative static
                    and
                    dynamic websites using .Additional Knowledge in
                    the use
                    of PHP and Mysql to allow clients to update content of their websites .Very strong
                    organizational,presentational, and communication skills to help plan out and pitch
                    different
                    web user Infterface styles that suited the client’s needs.
                    <br></br>
                    <br></br>
                    Passionate about learning and development with a desire to apply skills on a larger development.
                    Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
                    <br></br>
                    <br></br>
                    Here are a few technologies I’ve been working with recently:
                  </Typography>
                </AnimationOnScroll>
              </Box>
              <Box sx={{ mb: 2 }}>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                  <ul className="skill-lists">
                    <li>JavaScript</li>
                    <li>JavaScript (ES6)</li>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>React JS</li>
                    <li>Wordpress</li>
                    <li>Drupal</li>
                    <li>Magento 2</li>
                  </ul>
                </AnimationOnScroll>
              </Box>


            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="wrapper">
                <Box sx={item}>
                  <Box
                    component="img"
                    src="../tinmyowin.jpg"
                    alt="tinmyowin"
                    sx={{ width: '300px', borderRadius: '5px' }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>

    </>
  );
}

export default AboutMe;