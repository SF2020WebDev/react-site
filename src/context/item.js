import React, {createContext, useState} from 'react'

export const ItemContext = createContext({
    item: {},
    updateItem: () => null
})

const ItemDetails = ({children}) => {
    const [item, setItem] = useState({name:"Lilies", price:"£3.99"})

    return(
        <ItemContext.Provider
            value={{item, updateItem:setItem}}>
                {children}
        </ItemContext.Provider>
    )
}

export default ItemDetails