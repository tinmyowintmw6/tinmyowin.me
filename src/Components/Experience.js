import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AnimationOnScroll } from 'react-animation-on-scroll';



const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
      textTransform: 'none',
      fontSize: '14px',
      color: '#8892b0',
    },
  },
});

const experiencetheme = createTheme({
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

const tabTheme = createTheme({
  components: {
    // Name of the component
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
          textTransform: 'inherit',
          textAlign: 'left',
          alignItems: 'flex-start',
          minHeight: '75px',
          minWidth: '200px',
          '&.Mui-selected': {
            color: '#64ffda',
          },

          // '@media(maxWidth: 600px)': {
          //   display: 'none',
          //   '&.MuiTabs-flexContainer': {
          //     display: 'block',
          //     overflowX: 'auto',
          //   }
          // }
        },
        textColorPrimary: {
          color: '#8892b0',
        },
        indicator: {
          backgroundColor: '#64ffda',

        },
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('sm')]: {
            borderLeft: 'none',
          }

        },
        indicator: {
          backgroundColor: '#64ffda',
          left: '0',
          [theme.breakpoints.down('sm')]: {
            backgroundColor: 'transparent',
          }
        },
        scroller: {
          position: 'inherit',
        },

        flexContainer: {
          [theme.breakpoints.down('sm')]: {
            display: 'block',
            overflowX: 'auto',
          },
        }

      }
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant='subtitle2'>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ThemeProvider theme={experiencetheme}>
        <Box
          component="section"
          id="experience"
          sx={{ paddingBottom: '0' }}
        >
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <Typography variant="h1" className="number-about" sx={{ display: 'flex', position: 'relative', alignItems: 'center', margin: '10px 0px 40px', width: '100%' }}>
              Where I’ve Worked
            </Typography>
          </AnimationOnScroll>
        </Box>
      </ThemeProvider>
      <Box component='section'
        sx={{ flexGrow: 1, display: { sm: 'flex', md: 'flex' }, paddingTop: '10px' }}
      >
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <ThemeProvider theme={tabTheme}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderLeft: 2, borderColor: '#8892b0'
              }}

            >
              <Tab label="Super Seven Stars" {...a11yProps(0)} />
              <Tab label="Datalink Technology" {...a11yProps(1)} />
              <Tab label="Media Lane" {...a11yProps(2)} />

            </Tabs>
          </ThemeProvider>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInDown">
          <TabPanel value={value} index={0}>
            Wordpress Developer (Remote)
            <a href='https://thereisnolack.com/' className='panelLink'> @ TINL </a><br></br>
            <ThemeProvider theme={theme}>
              <Typography variant='subtitle1'
                component='span'
              >
                June 2023 - December 2023
              </Typography>
            </ThemeProvider>
            <Box sx={{ color: '#8892b0' }}>
              <ul className='list-details'>
                <li>Web domain and server set-up / admin. E.g. cPanel, AWS, DNS, SSL, etc.</li>
                <li>Developed a custom shopping cart system to receive a transaction from customers which can be viewed from a custom-made Content Management System made for the clients</li>
                <li>Develop a flexible and well-structured front-end architecture.</li>
                <li>Provide ongoing support, maintenance and troubleshooting of applications.</li>
                <li>Conduct user training on using applications & provide user guides / documentation.</li>
                <li>Developed project scope and create concepts.</li>
                <li>Learn and understand user interactions.</li>
              </ul>
            </Box>

          </TabPanel>
          <TabPanel value={value} index={0}>
            Front-End Developer
            <a href='https://supersevenstars.com/' className='panelLink'> @ Super Seven Stars</a><br></br>
            <ThemeProvider theme={theme}>
              <Typography variant='subtitle1'
                component='span'
              >
                December 2020 - April 2023
              </Typography>
            </ThemeProvider>
            <Box sx={{ color: '#8892b0' }}>
              <ul className='list-details'>
                <li>Developed HTML/CSS/JavaScript/Bootstrap front-end web responsive and layout e-Commerce software.</li>
                <li>Collaborated with web designers to program the entire site using Magento.</li>
                <li>Provide on-going support, maintenance and troubleshooting of applications.</li>
                <li>Worked closely with UI/UX Designer to take art concept, mockup, wireframes, and animation models from the concept to the implementation.</li>
                <li>Develop concepts, control project flow and ensure deliverable milestones are met.</li>
              </ul>
            </Box>

          </TabPanel>
          <TabPanel value={value} index={1}>
            Web Developer <a href='https://medialane.com.mm/' className='panelLink'> @ Datalink Technology</a><br></br>
            <ThemeProvider theme={theme}>
              <Typography variant='subtitle1'
                component='span'
              >
                Nov 2017 - Nov 2020
              </Typography>
            </ThemeProvider>

            <Box sx={{ color: '#8892b0' }}>
              <ul className='list-details'>
                <li>Collaborated with web designers to program the entire site using Wordpress, HTML,CSS,JavaScript, PHP and MySQL, JQuery from PSD files.</li>
                <li>Web domain and server set-up / admin. E.g. cPanel, WHM, DNS, SSL, etc.</li>
                <li>Create and develop website using Cpanel, FileZilla, XAMPP, WAMP, MAMP, PHP, Wordpress, JavaScript, Adobe Dreamweaver, Adobe Photoshop, MySQL.</li>
                <li>Conduct user training on using applications & provide user guides / documentation.</li>
              </ul>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Web Developer <a href='https://datalink.com.mm' className='panelLink'> @ Media Lane</a><br></br>
            <ThemeProvider theme={theme}>
              <Typography variant='subtitle1'
                component='span'
              >
                Jan 2016 - Oct 2017
              </Typography>
            </ThemeProvider>
            <Box sx={{ color: '#8892b0' }}>

              <ul className='list-details'>
                <li>Developed a custom shopping cart system to receive a transactions from customers which can be viewed from a custom made Content Management System made for the clients.</li>
                <li>Collaborated with a web designer to program the entire site using Wordpress, HTML, CSS, JavaScript, PHP and MySQL, JQuery from PSD files.</li>
                <li>Develop a flexible and well-structured front-end architecture.</li>
                <li>Provide on-going support, maintenance and troubleshooting of applications.</li>
              </ul>
            </Box>
          </TabPanel>
        </AnimationOnScroll>


      </Box >

      {/* <Box component='section' className='experienceTab'
        sx={{ flexGrow: 1, display: { md: 'none' }, paddingTop: '10px' }}
      >
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <ThemeProvider theme={tabTheme}>
            <Tabs
              className='tabBorder'
              orientation="horizontal"
              variant="scrollable"
              value={value}
              scrollButtons
              allowScrollButtonsMobile
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 2, borderColor: '#8892b0', position: 'relative' }}
            >
              <Tab label="Super Seven Stars" {...a11yProps(0)} />
              <Tab label="Datalink Technology" {...a11yProps(1)} />
              <Tab label="Media Lane" {...a11yProps(2)} />

            </Tabs>
          </ThemeProvider>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInDown">
          <TabPanel value={value} index={0}>
            Front-End Developer
            <a href='https://supersevenstars.com/' className='panelLink'> @ Super Seven Stars</a><br></br>
            <ThemeProvider theme={theme}>
              <Typography variant='subtitle1'
                component='span'
              >
                December 2020 - Present
              </Typography>
            </ThemeProvider>

            <Box sx={{ color: '#8892b0' }}>
              <ul className='list-details'>
                <li>Developed HTML/CSS/JavaScript/Bootstrap front-end web responsive and layout e-commerce software</li>
                <li>Collaborated with web designers to program the entire site using Magento.</li>
                <li>Provide on-going support, maintenance and troubleshooting of applications.</li>
                <li>Worked closely with UI/UX Designer to take art concept, mockup, wireframes, and animation models from the concept to the implementation.</li>
                <li>Develop concepts, control project flow and ensure deliverable milestones are met.</li>
              </ul>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Web Developer <a href='https://medialane.com.mm/' className='panelLink'> @ Datalink Technology</a><br></br>
            <ThemeProvider theme={theme}>
              <Typography variant='subtitle1'
                component='span'
              >
                Nov 2017 - Nov 2020
              </Typography>
            </ThemeProvider>

            <Box sx={{ color: '#8892b0' }}>
              <ul className='list-details'>
                <li>Collaborated with web designers to program the entire site using Wordpress, HTML,CSS,JavaScript, PHP and MySQL, JQuery from PSD files.</li>
                <li>Web domain and server set-up / admin. E.g. cPanel, WHM, DNS, SSL, etc.</li>
                <li>Create and develop website using Cpanel, FileZilla, XAMPP, WAMP, MAMP, PHP, Wordpress, JavaScript, Adobe Dreamweaver, Adobe Photoshop, MySQL.</li>
                <li>Conduct user training on using applications & provide user guides / documentation.</li>
              </ul>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Web Developer <a href='https://datalink.com.mm' className='panelLink'> @ Media Lane</a><br></br>
            <ThemeProvider theme={theme}>
              <Typography variant='subtitle1'
                component='span'
              >
                Jan 2016 - Oct 2017
              </Typography>
            </ThemeProvider>

            <Box sx={{ color: '#8892b0' }}>
              <ul className='list-details'>
                <li>Developed a custom shopping cart system to receive a transactions from customers which can be viewed from a custom made Content Management System made for the clients.</li>
                <li>Collaborated with a web designer to program the entire site using Wordpress, HTML, CSS, JavaScript, PHP and MySQL, JQuery from PSD files.</li>
                <li>Develop a flexible and well-structured front-end architecture.</li>
                <li>Provide on-going support, maintenance and troubleshooting of applications.</li>
              </ul>
            </Box>
          </TabPanel>
        </AnimationOnScroll>


      </Box > */}

    </>
  );
}
