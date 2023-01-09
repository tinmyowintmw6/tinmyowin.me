import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const buttontheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some Css
          fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
          fontSize: '18px',
        },
        outlined: {
          // Style overrides
          color: '#64ffda',
          border: '1px solid hsl(180deg 51% 52%)',
          '&:hover': {
            color: '#64ffda',
            border: '1px solid #64ffda',
          }
        }
      },
    },
  },
});

const GetInTouch = () => {
  return (
    <>
      <Box
        component="section"
        id="getintouch"
        sx={{ paddingBottom: '0', maxWidth: '600px', margin: '0px auto 100px', textAlign: 'center' }}
      >
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <Typography variant="h1" sx={{ textAlign: 'center', position: 'relative', alignItems: 'center', margin: '10px 0px 40px', width: '100%', fontSize: 'clamp(40px, 5vw, 60px);' }}>
            Get In Touch
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <Typography variant='body1' sx={{ color: '#8892b0', fontSize: '17px' }}>
            Although I’m not always looking for new opportunities, my mail inbox is always open.Whether you have a question or just want to say hi, I’ll try my best to get back to you !
          </Typography>
        </AnimationOnScroll>
        <ThemeProvider theme={buttontheme}>
          <Typography className='animate fadeInDown two' variant='h5'>
            <Button sx={{ mt: 7, textTransform: 'inherit' }} variant="outlined"> <a href='mailto:tinmyowintmw6@gmail.com' className='saybutton'>Say Hello</a></Button>
          </Typography>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default GetInTouch;
