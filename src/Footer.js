import * as React from 'react';
import '@fontsource/roboto/500.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import "./Footer.css";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('ln');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

     <div className="footer">
       <BottomNavigation value={value} onChange={handleChange}  style={{ background: 'black' }}>
         <BottomNavigationAction
            style={{ color: 'white' }}
            label="LinkedIn"
            value="ln"
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            style={{ color: 'white' }}
            label="GitHub"
            value="gh"
            icon={<GitHubIcon/>}
          />
          <BottomNavigationAction
            style={{ color: 'white' }}
            label="Instagram"
            value="in"
            icon={<InstagramIcon />}
          />
        </BottomNavigation>
        <div className="footer__bottom">
          <Typography variant="caption"  align="center" component="h5">
             <span> &copy; 2022 Aryan Kapoor</span>
          </Typography>
        </div>
    </div>
  );
}
