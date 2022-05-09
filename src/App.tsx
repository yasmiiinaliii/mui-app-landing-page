import React from 'react';
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme'
import ResponsiveAppBar from './component/ResponsiveAppBar'
import HeroSection from './component/HeroSection';
import Features from './component/Features';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box component="main">
      <CssBaseline/>
      <ResponsiveAppBar/>
      <HeroSection/>
      <Features/>
    </Box>

    </ThemeProvider>
  );
}

export default App;
