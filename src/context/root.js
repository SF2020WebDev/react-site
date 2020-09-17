import React from 'react'

import Basket from './basket'
import ItemDetails from './item'

const ContextSource = ({children}) => {
    return(
        <>
            <Basket>
                <ItemDetails>
                    {children}
                </ItemDetails>
            </Basket>
        </>
    )
}

export default ContextSource