import React from 'react';
import { HeaderProps } from '../interfaces/interfaces';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const Header: React.FC<HeaderProps> = ({ logoSrc, title = 'Los Pepes' }) => {
    console.log({logoSrc})
  return (
    <AppBar position="static" sx={{ backgroundColor: grey[500] }}>
      <Toolbar>
        <Box component="img" src={`${import.meta.env.BASE_URL}logo-pepes.png`} alt="Logo" sx={{ width: 80, height: 80, marginRight: 2 }} />
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
