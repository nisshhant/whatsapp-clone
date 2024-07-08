import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import {Chat as MessageIcon, MoreVert, Search } from "@mui/icons-material";
import SearchBar from "./Search";


const Component = styled(Box)`
height : 44px;
background : #ededed ;
padding : 8px 16px ;
border-right : 1px solid #D3D3D3 ;
display : flex;
align-items : center;
`
const Wrapped = styled(Box)`
margin-left : auto; 
& > * {
margin-left : 10px;
padding : 8px;
color : #000; 
};

& : first-child{
font-size: 22px;
margin-top : 3px;
}

`

const Image = styled ("img")({
    height :40,
    width : 40,
    borderRadius : "50%" 
}



)

const Header = () => {
    const {account} = useContext(AccountContext)
   
    return(<>
    <Component>
        <Image src = {account.picture} alt ="dp"/>
        <Wrapped>
        <MessageIcon/>
        
        <MoreVert/>
        </Wrapped>
        
    </Component>
    <Box><SearchBar/></Box>
       
    </>)
    
}

export default Header;
