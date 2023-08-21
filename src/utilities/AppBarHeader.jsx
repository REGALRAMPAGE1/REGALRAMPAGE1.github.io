import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './AppBarHeader.css';
import HeaderText from './HeaderText';
import { Link } from "react-router-dom";

function appBarLabel() {
  return (
    <Toolbar style={{ marginLeft: 'auto' }}>
      {/* Left Headers */}
      <HeaderText Text={'Home'} redirectUrl={"/"}/>
      <HeaderText Text={'About'} redirectUrl={"/about"}/>
      <HeaderText Text={'Services'} redirectUrl={"/services"} />
      {/* Right Headers */}
      <HeaderText Text={'Custom'} redirectUrl={"/custom"}/>
      <HeaderText Text={'Consultation'} redirectUrl={"/consultation"}/>
      <HeaderText Text={'Contact Us'} redirectUrl={"/contactUs"}/>
    </Toolbar>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // Set the primary color to white
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '7.25em', // Set the desired height of the AppBar
        },
      },
    },
  },
});

export default function AppBarHeader() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar className='Header' position="fixed">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' ,  alignItems: 'center'}}>
          {/* Logo */}
          <div style={{ alignSelf: 'center' }}>
            <Link to="/">
              <img className="logoImageHeader" src="/logo/FC - logo - horizontal.png" alt="Logo" style={{paddingTop: '0'}}/>
            </Link>
          </div>
          {appBarLabel()}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
