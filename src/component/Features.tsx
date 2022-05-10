import { Grid, Container, Stack, Typography, Theme } from "@mui/material";
import { Box } from "@mui/system";
import mobile from "../assets/images/mobile-2.svg";
import ComputerIcon from "@mui/icons-material/Computer";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Features = () => {
  return (
    <Box component="section" marginTop={16}>
      <Container>
        <Grid container>
          <Grid container item xs={12} md={8}>
            {allFeatures.map(({ label, IconComponent, caption }) => (
              <Grid key={label} item xs='auto' sm='auto' md={4} spacing={3} alignContent='center'> 
                <Stack direction="column" spacing={1} marginBottom={6}>
                  <IconComponent
                    sx={{
                      color: (theme: any) => theme.palette.primary.main,
                      fontSize: "4rem",
                    }}
                  />
                  <Typography variant="h5"> {label}</Typography>
                  <Typography variant="caption">{caption}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
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
                marginRight: {
                  md: "-200px",
                },
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

const allFeatures = [
  {
    label: "Use on Any Device",
    IconComponent: (props: { sx: any }) => <ComputerIcon {...props} />,
    caption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    label: "Material Design Icon",
    IconComponent: (props: { sx: any }) => <ViewQuiltIcon {...props} />,
    caption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    label: "Retina Ready",
    IconComponent: (props: { sx: any }) => <RemoveRedEyeIcon {...props} />,
    caption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    label: "W3c Valid Code",
    IconComponent: (props: { sx: any }) => <LibraryAddCheckIcon {...props} />,
    caption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    label: "Fully Responsive",
    IconComponent: (props: { sx: any }) => <MobileFriendlyIcon {...props} />,
    caption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    label: "Browser Compatibility",
    IconComponent: (props: { sx: any }) => <FavoriteIcon {...props} />,
    caption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
];
