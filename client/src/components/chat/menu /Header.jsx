import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
height : 44px;
background : #ededed ;
padding : 8px 16px ;
border-right : 1px solid #D3D3D3 ;
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
    </Component>
    </>)
    
}

export default Header;
