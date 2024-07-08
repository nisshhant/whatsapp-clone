import { Box } from "@mui/material";
import Header from "./Header";
import SearchBar from "./Search";




const Menu = () => {
    return ( 
        <>
        <Box>
            <Header/>
            <Box><SearchBar/></Box>
    
        </Box>
        </>
    )
}

export default Menu;