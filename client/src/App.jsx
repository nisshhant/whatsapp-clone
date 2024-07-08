import { useState } from 'react'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google'
import AccountProvider from './context/AccountProvider'
function App() {
  const clientId = '1040944553674-39vo5t6ar6lha9u22m60do6a1mckgrgu.apps.googleusercontent.com' 
  return (
    <>
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
    <Messenger/>
    </AccountProvider>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
