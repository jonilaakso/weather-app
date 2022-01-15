//Imports
import { AppBar } from "@mui/material";
import Box from '@mui/material/Box';
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material";


const theme = createTheme({
    palette: {
            primary:{
                main: "#009688",
                color: "black",
            },
        },
});

export default function Header(){
    return(
    <ThemeProvider theme= { theme }>
        <Box sx= {{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <Typography>WeatherApp</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
        
    );
}

