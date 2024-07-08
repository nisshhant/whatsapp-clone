import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    const [account , SetAccount] = useState();
    return ( 
        <AccountContext.Provider value = {{
            account, SetAccount
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;