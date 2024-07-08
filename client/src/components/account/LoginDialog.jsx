import { useContext } from 'react';
import { Dialog, Box, Typography, List, ListItem, styled}from '@mui/material'
import { qrCodeImage } from '../../constants/getdata';
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
    display: flex;
`

const Container = styled(Box)`
padding : 56px 0 56px 56px 
`

const QrCode = styled('img')({
    height: 200,
    width: 200,
    margin: '50px'
})

const Title = styled(Typography)`
font-family : inherit; 
font-weight : 300 ;
color : #525252 ;
font-size : 26px; 
margin-bottom : 25px; 
`


const Dialogstyle= {
    height: '90%',
    marginTop : '20%',
    width : '60%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow : 'none',
    overflow : 'hidden'
}


const LoginDialog = () => {

    const {SetAccount} =useContext(AccountContext);

    const onLoginSuccess = (res) =>{
       const Decoded = jwtDecode(res.credential);
       SetAccount(Decoded);
    }

    const onError = (res) =>{
        console.log(" Paaji error aagyi h hehe ")
    }

    return (
        <>
        <Dialog open = {true}
        PaperProps={{sx: Dialogstyle}} 
        hideBackdrop = {true}>
        <Component id = "component">
            <Container>
                <Title> To use Whatsapp on your computer: </Title>
                <List>
                    <ListItem>1. Open Whatsapp on your phone.</ListItem>
                    <ListItem>2. Tap Menu Settings and selelct Whatsapp Web.</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code.</ListItem>
                </List>
            </Container>
            <Box style = {{position : "relative"}}>
                <QrCode src = {qrCodeImage} alt = "Bar Code "></QrCode>
                <Box style = {{position : 'absolute',
                    top :'45%',
                    left : '20%'
                }}>
                    <GoogleLogin
                    onSuccess={onLoginSuccess}
                    onError={onError}
                    />
                </Box>
            </Box>
        </Component>
        </Dialog>
        </>

    )
}

export default LoginDialog;