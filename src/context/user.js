import React, {createContext, useState} from 'react'

export const UserContext = createContext({
    user:{},
    updateUser: () => null,
})

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name:""})

    return (
        <UserContext.Provider
            value={{user, updateUser: setUser}}>
                {children}
            </UserContext.Provider>
    )
}

export default UserProvider