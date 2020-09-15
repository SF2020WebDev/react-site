import React from 'react'
import ItemDetails from './item.js'

const ContextBasket = ({children}) => {
    return(
        <>
            <ItemDetails>
                {children}
            </ItemDetails>
        </>
    )
}

export default ContextBasket