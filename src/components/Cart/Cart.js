import React, { useContext } from "react"
import { animated } from "react-spring"
import { StoreContext } from "../../context/StoreContext"

const Cart = ({ style }) => {
    const {
        isCartOpen,
        checkout,
        toggleCartOpen,
        removeProductFromCart,
    } = useContext(StoreContext)
    return (
        <animated.div
            style={{
                zIndex: 100,
                position: "fixed",
                top: 0,
                right: 0,
                width: "50%",
                height: "100%",
                background: "white",
                padding: "40px 2%",
                boxShadow: "var(--elevation-4)",
                ...style,
            }}
        >
            <button
                style={{
                    background: "var(--red)",
                    position: "absolute",
                    top: 10,
                    right: 10,
                }}
                className="delete is-large"
                onClick={toggleCartOpen}
            >
                Close Cart
      </button>
            <h3 className="title">Cart</h3>
            {checkout.lineItems.length > 0 ? (
                <>
                    {checkout.lineItems.map(item => (
                        <div
                            key={item.id}
                            style={{ display: "flex", marginBottom: "2rem" }}
                        >
                            <div
                                style={{
                                    width: 60,
                                    height: 60,
                                    overflow: "hidden",
                                    marginRight: 10,
                                }}
                            >
                                <img src={item.variant.image.src} alt="" />
                            </div>
                            <div>
                                <h4 className="title is-4">{item.title}</h4>
                                <p className="subtitle is-5">${item.variant.price}</p>
                                <p className="subtitle is-5">Qty: {item.quantity}</p>
                                <button
                                    onClick={() => removeProductFromCart(item.id)}
                                    className="is-small button is-danger is-outlined"
                                >
                                    Remove
                </button>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <div>
                        Total: <h5 className="title">${checkout.totalPrice}</h5>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <a
                            href={checkout.webUrl}
                            className="button is-fullwidth is-success"
                        >
                            Checkout Now
            </a>
                    </div>
                </>
            ) : (
                    <p>No items in cart</p>
                )}
        </animated.div>
    )
}

export default Cart
