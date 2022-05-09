import { Grid, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import mobile from "../assets/images/mobile-2.svg";
import "./Features.css";

const Features = () => {
  return (
    <Box component="section" marginTop={16}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            {" "}
            b1 content
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack
              className="mobileVII"
              alignItems="center"
              alignContent="center"
              justifyContent="center"
              sx={{
                width: {
                  xs: "400",
                  sm: "700",
                  md: "800",
                  lg: "920",
                  xl: "800",
                },
                height: "600",
                backgroundColor: "#EDEDF7",
                borderRadius: "400px 0px 0px 400px",
                marginRight:{
                    md: '-200px'
                }
              }}
            >
              <img src={mobile} alt="mobile-1" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
