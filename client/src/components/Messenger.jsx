import {AppBar, Toolbar, styled, Box} from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider.jsx'
import LoginDialog from './account/LoginDialog.jsx'
import App from '../App.jsx'
import ChatDialog from './chat/ChatDialog.jsx'

const LoginHeader = styled(AppBar)`
height : 220px;
background-color : #00bfa5 ;
box-shadow : none ;`

const ChatHeader = styled(AppBar)`
height : 100px;
background-color : #00bfa5 ;
box-shadow : none ;`


const Component = styled(Box)`
background-color : #DCDCDC;
height : 100vh ;
`

const Messenger = () => {
    const {account} = useContext(AccountContext);   
    return (
        
    <Component> 
        {
            account ? <>
            <ChatHeader>
            <Toolbar>
            </Toolbar>
            </ChatHeader>
            hello from messenger
            <ChatDialog/>
            </> : 
            <>
            <LoginHeader>
            <Toolbar>
            </Toolbar>
            </LoginHeader>
            hello from messenger
            <LoginDialog/>
            </>
        }
        </Component>)
            
}

export default Messenger;