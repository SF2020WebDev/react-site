import React from 'react'
import UserProvider from './user'
import PageProvider from './context'

const ContextSource = ({children}) => {
    return(
        <>
            <UserProvider>
                <PageProvider>
                    {children}
                </PageProvider>
            </UserProvider>
        </>
    )
}

export default ContextSource