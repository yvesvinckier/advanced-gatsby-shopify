import React, { useContext } from "react"
import { animated } from "react-spring"
import { StoreContext } from "../../context/StoreContext"

const Cart = ({ style }) => {
    const { isCartOpen, checkout, toggleCartOpen } = useContext(StoreContext)

    return (
        <animated.div
            style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "50%",
                height: "100%",
                background: "white",
                padding: 60,
                boxShadow: "var(--elevation-4)",
                ...style,
            }}
        >
            <button onClick={toggleCartOpen}>Close Cart</button>
            <h3>Cart</h3>
            {checkout.lineItems.map(item => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.quantity}</p>
                    <p>${item.variant.price}</p>
                </div>
            ))}
        </animated.div>
    )
}

export default Cart
