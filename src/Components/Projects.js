import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import Button from '@mui/material/Button';

const itemProject = {
  display: 'block',
  flexDirection: 'column',
  alignItems: 'center',

};

const project = createTheme({
  typography: {
    allVariants: {
      textTransform: 'none',
      color: '#ffffff',
      margin: '0px 0px 30px 4px',
      fontSize: 'clamp(20px, 8vw, 30px)',
      fontWeight: '600',


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



const Project = (props) => {
  const posts = props?.posts;
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };



  return (
    <>
      <ThemeProvider theme={project}>
        <Box
          component="section"
          id="projects"
          sx={{ paddingBottom: '0' }}
        >
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <Typography variant="h1" sx={{ textAlign: 'center', position: 'relative', alignItems: 'center', margin: '10px 0px 40px', width: '100%' }}>
              Noteworthy Projects
            </Typography>
          </AnimationOnScroll>
        </Box>
      </ThemeProvider>
      <Box component='section'
        sx={{ flexGrow: 1, display: { md: 'grid' }, paddingTop: '10px' }}
      >
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <Grid container >
            {posts?.slice(0, visible)?.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item?.id}>
                <Box sx={itemProject}>
                  <Box id="groupWrap" className="image-wrapper-projects" sx={{ margin: '7px 7px 7px', minHeight: '276px',
                   gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                   gap: '15px', boxShadow: '0 10px 30px -15px rgb(2 12 27 / 70%)',
                 }}>
                    <Box className='projects-box'>
                      <Box className='top-wrapper'>
                        <Box className='folder'>
                          <FolderOutlinedIcon />
                        </Box>
                        <Box className='project-links'>
                          {
                            item.git_hub_link !== "" &&
                            <a href={item.git_hub_link} target='_blank' ><GitHubIcon /></a>
                          }
                          <a href={item.project_links} target='_blank'><LaunchOutlinedIcon /></a>
                        </Box>
                      </Box>
                      <Box className='project-title' >
                        <a href={item.project_links} target='_blank'>
                          <Typography variant='h3' sx={{ color: '#ccd6f6', margin: '0px 0px 10px', fontSize: '18px', textDecoration: 'none', fontWeight: '700' }}>
                            {item.webTitle}
                          </Typography>
                        </a>
                      </Box>
                      <Box className='project-description'>
                        <Typography variant='body1' sx={{ color: '#8892b0', fontSize: '15px' }}>
                          {item.content}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className='project-footer'>
                      <ul className='language-lists'>
                        {item?.cats?.map((x) => (
                          <li key={x?.term_id}> {x?.name} </li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
            {visible < posts?.length && (
              <ThemeProvider theme={buttontheme}>
                <Typography variant='h5' sx={{ margin: '0 auto' }}>
                  <Button sx={{ mt: 3, textTransform: 'inherit' }} variant="outlined" onClick={showMoreItems}>Show More</Button>
                </Typography>
              </ThemeProvider>
            )}
          </Grid>
        </AnimationOnScroll>
      </Box>
    </>
  );
}
export default Project;
