import * as React from 'react';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
const SocialShare = () => {
  return (
    <>
      <Typography variant='h6' sx={{ color: '#8892b0' , display: {xs: 'none' , md: 'block'} }}>
        <ul className='list-social'>
          <li><a href='https://github.com/tinmyowintmw6' target={'_blank'}><GitHubIcon /></a></li>
          <li><a href='https://www.instagram.com/tinmyowin_tmw/' target={'_blank'}><InstagramIcon /></a></li>
          <li><a href='https://www.facebook.com/tin.myo.win.3389/' target={'_blank'}><FacebookIcon /></a></li>
          <li><a href='https://twitter.com/tinmyowintmw6' target={'_blank'}><TwitterIcon /></a></li>
          <li><a href='https://www.linkedin.com/in/tin-myo-win-7b2986184/' target={'_blank'}><LinkedInIcon /></a></li>
        </ul>
      </Typography>
    </>
  );
}

export default SocialShare;