import { Search } from "@mui/icons-material";
import {InputBase, styled,Box } from "@mui/material";


const InputBar = styled(InputBase)`
border-radius: 15px;
background-color : #828282;
`

const Boxwrapper = styled(Box)`
background-color : #cedbda;
`


const SearchBox = styled(Box)`
background-color : #000;
margin : 10px ;
border-radius: 15px;
`


const Input = styled (InputBar)`
margin : 5px; 
width : 100%;
`
const SearchBar = () =>{
return (
<>
<Boxwrapper>
<SearchBox>
<Box><Search/></Box>
<Box><Input/></Box>
</SearchBox>
</Boxwrapper>
</>
)
}

export default SearchBar;