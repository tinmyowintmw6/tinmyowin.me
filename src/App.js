import * as React from 'react';
import './App.css';
import Navbar from './Navbar';
import BioMain from './Components/Bio';
import AboutMe from './Components/AboutMe';
import { Box } from '@mui/system';
import Experience from './Components/Experience';
import { Triangle } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import Project from './Components/Projects';
import GetInTouch from './Components/GetinTouch';
import SocialShare from './Components/SocialLeft';
import EmailSent from './Components/EmailRight';
import Footer from './Footer';


function App() {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    fetch('http://tinmyowin.me.testwunder.luckychanthar.com/wp-json/wl/v1/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  })


  return (
    <div className='eric'>
      {isLoading ?
        <Triangle
          height="80"
          width="80"
          color="#64ffda"
          ariaLabel="triangle-loading"
          wrapperStyle={{
            textAlign: 'center',
            display: 'block',
            minHeight: '100vh',
            justifyContent: 'center',
            background: '#0a192f',
          }}
          wrapperClassName="load"
          visible={true}

        /> :
        <>
          <header className="App-header">
            <Navbar />
          </header>
          <div className='left'>
            <SocialShare />
          </div>
          <div className='right'>
            <EmailSent />
          </div>
          <div className="App">
            <Box component='main' className='fullHeight'>
              <BioMain />
              <AboutMe />
              <Experience />
              <Project posts={posts} />
              <GetInTouch />
              <Footer />
            </Box>
          </div>
        </>
      }
    </div>

  );
}

export default App;
