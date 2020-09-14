import React, {createContext, useState} from 'react'

export const PageContext = createContext({
    page: '',
    updatePage: () => null,
    swappedPage: false,
    updateSwappedPage: () => null
})

const PageProvider = ({children}) => {
    const [page, setPage] = useState('/')
    const [swappedPage, setSwappedPage] = useState(false)

    return (
        <PageContext.Provider
            value={{page, updatePage: setPage, swappedPage, updateSwappedPage: setSwappedPage}}>
                {children}
            </PageContext.Provider>
    )
}

export default PageProvider
