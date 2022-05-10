import { createTheme } from "@mui/material";
import { dark, light } from "@mui/material/styles/createPalette";
import { fontWeight, palette, typography } from "@mui/system";

const theme = createTheme({
    palette:{
        primary:{
            main: '#424FAF',
            light: '#5E69C3',
            dark: '#344099'
        },
        secondary:{
            main: '#EDEDF7',
            dark:'#C3C7E4'
        },
    },
    typography:{
        h1:{
            fontSize: '2.75rem',
            fontWeight: '400'
        },
        h2:{
            fontSize: '2.5rem',
        },
        h3:{
            fontSize: '2.25rem',
        },
        h4:{
            fontSize: '2rem',
        },
        h5:{
            fontSize: '1.25rem',
        },
        h6:{
            fontSize: '1.5rem',
            color: '#424FAF'
        },
        caption:{
            fontSize: '1rem'
        }

    }
})

export default theme