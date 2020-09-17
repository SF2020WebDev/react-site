import React, { createContext, useState } from 'react'

export const BasketContext = createContext({
    occupied: {},
    updateOccupied: () => null
})

const Basket = ({children}) => {
    const [occupied, setOccupied] = useState(false)

    return(
        <BasketContext.Provider
            value={{occupied, updateOccupied: setOccupied}}>
                {children}
        </BasketContext.Provider>
    )
}

export default Basket