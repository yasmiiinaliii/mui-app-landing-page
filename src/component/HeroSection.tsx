import React from "react";
import { Box, Grid, Stack, Typography, Button, Container } from "@mui/material";
import mobile from "../assets/images/mobile1.svg";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from '@mui/icons-material/Apple';
function HeroSection() {
  return (
    <Box component="section">
      <Grid container alignItems="center" spacing={6}>
        <Grid item xs={12} md={6}>
          <Box  >
          <img src={mobile} alt="mobile" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} > 
        <Container>
        <Stack direction="column" spacing={6} margin={4} >  
          <Stack direction="column" spacing={2}>
            <Typography variant="h6"> Evalynn Music </Typography>
            <Typography variant="h1"> Best Music App 2020</Typography>
            <Typography variant="caption" sx={{ maxWidth: 400 }}>
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna{" "}
            </Typography>
          </Stack>
          <Stack   direction={{ xs: 'column', sm: 'row' }} spacing={3}
            sx={{
              "& Button": { borderRadius: 20, py: 1.5, px: 3 },
            }}
          >
            <Button variant="contained" startIcon={<AndroidIcon />}>
              Play Store
            </Button>
            <Button variant="contained" startIcon={<AppleIcon />}>
              Apple Store
            </Button>
          </Stack>
          </Stack>
        </Container>
        
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
