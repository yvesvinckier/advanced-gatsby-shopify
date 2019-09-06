import React, { createContext, useState } from 'react'

import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: "advanced-gatsby-blowup.myshopify.com",
    storefrontAccessToken: "3c3a9ad7c0d62b77fabe8ff90e18f816",
})

const defaultValues = {
    isCartOpen: false,
    cart: [],
    addProductToCart: () => {
        console.log('added!')
    },
    client
}


export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({ children }) => {
    return (
        <StoreContext.Provider value={defaultValues}>
            {children}
        </StoreContext.Provider>
    )
}