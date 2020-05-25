import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 824,
            md: 960,
            lg: 1280,
            xl: 1920
        }
    },
    typography: {
        fontFamily: " 'Jost', sans-serif",
        h5: {
            fontWeight: 700,
            fontSize: "2rem",
        },
        h1: {
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "3rem"
        }
    },
})
export default theme