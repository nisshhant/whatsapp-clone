import { Dialog, Box, styled } from "@mui/material";
import Menu from "./menu /Menu";
import EmptyChat from "./chat/EmptyChat";


const Dialogstyle= {
    height: '95%',
    borderRadius : '0' , 
    width : '100%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow : 'none',
    overflow : 'hidden'
}

const Component = styled(Box)`
display : flex;
`

const LeftComponent = styled(Box)`
    min-width : 450px;
`
const RightComponent = styled(Box)`
    width :73%; 
min-width : 300px;
height : 100% ;
border-left : 1px solid rgba(12,0,0,0.14)`

const ChatDialog = () => {
    return (
        <>
        <Dialog
        open = {true}
        PaperProps={{sx: Dialogstyle}}
        hideBackdrop = {true}
        maxWidth = {'md'}
        >
             <Component>
             <LeftComponent><Menu/></LeftComponent>
             <Box> <EmptyChat/></Box>
             </Component>
        </Dialog>
        </>
    )


}

export default ChatDialog;