import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
      textTransform: 'none',
      color: '#64ffda',
      margin: '0px 0px 30px 4px',
      fontSize: '18px',
      fontWeight: '400',
    },
  },
});

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

const BioMain = () => {
  return (
    <>

      <Box
        component="section"
        sx={{
          display: 'flex',
          overflow: 'hidden',
          webkitBoxPack: 'center',
          justifyCcontent: 'center',
          webkitBoxAlign: 'center',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          minHeight: '100vh',
          padding: '0px',
        }}
      >
        <ThemeProvider theme={theme}>
          <Box>

            <Typography className='animate fadeInDown two'
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, }}
            >

              Hi, my  name  is

            </Typography>

          </Box>

        </ThemeProvider>
        <Box component="div"
          sx={{ fontSize: 'clamp(40px, 8vw, 80px)', margin: '0px' }}>

          <Typography className='animate fadeInDown two'
            variant="h1"
            sx={{ flexGrow: 1, fontSize: 'clamp(40px, 8vw, 80px)' }}
          >
            Tin Myo Win.
          </Typography>
        </Box>
        <Box>
          <Typography className='animate fadeInDown two'
            variant="h1"
            sx={{ flexGrow: 1, fontSize: 'clamp(40px, 8vw, 80px)', color: '#8892b0' }}
          >
            I build things for the web.
          </Typography>
        </Box>
        <Box>
          <Typography className='animate fadeInDown two'
            variant="body1"
            sx={{
              flexGrow: 1, fontSize: 'clamp(12px, 8vw, 16px)', margin: '20px 0px 0px',
              maxWidth: '600px', color: '#8892b0'
            }}
          >
            Front-End Developer with hands-on experience in identifying web-based user interactions along with designing & implementing
            highly-responsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing
            application interface code via Javascript and ReactJs workflows.I'm focused on problem-solving aptitude to enhance application performance.

          </Typography>
          <ThemeProvider theme={buttontheme}>
            <Typography className='animate fadeInDown two' variant='h5'>
              <Button sx={{ mt: 3, textTransform: 'inherit' }} variant="outlined"><a href='../resume.pdf' target='{_blank}' rel="noopener noreferrer" className='saybutton'>Check Me Out !</a></Button>
            </Typography>
          </ThemeProvider>
        </Box>

      </Box>
    </>

  );
}

export default BioMain;