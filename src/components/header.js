import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { useTransition } from "react-spring"
import { FaShoppingCart } from "react-icons/fa"
import "../style.scss"
import { StoreContext } from "../context/StoreContext"
import logo from "../images/logo.svg"
import Cart from "./Cart/Cart"
import Loader from "./Loader"
import Nav from "./Nav"

const Header = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen, checkout } = useContext(
    StoreContext
  )
  const transitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%, 0, 0)" },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(100%, 0, 0)" },
  })
  const qty = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  return (
    <>
      <header
        className="level is-mobile"
        style={{
          padding: "10px 5%",
          background: "var(--purp)",
          boxShadow: "var(--elevation-2)",
        }}
      >
        <div className="level-left">
          <Link to="/">
            <img
              style={{ height: 60, maxHeight: "none", marginBottom: 0 }}
              src={logo}
              alt="Level Up Logo"
            />
          </Link>
          <Nav />
        </div>
        <div className="level-right">
          <div className="navbar-item">
            <button
              className="button"
              style={{
                position: "relative",
                background: "transparent",
                border: "none",
              }}
              onClick={toggleCartOpen}
            >
              {qty > 0 && (
                <div
                  style={{
                    color: "white",
                    position: "absolute",
                    background: "var(--red)",
                    borderRadius: 15,
                    textAlign: "center",
                    height: 30,
                    top: -5,
                    right: -5,
                    width: 30,
                    lineHeight: "30px",
                  }}
                >
                  {qty}
                </div>
              )}
              <FaShoppingCart
                style={{ color: "white", height: 30, width: 30 }}
              />
            </button>
          </div>
        </div>
        {transitions.map(
          ({ item, key, props }) => item && <Cart key={key} style={props} />
        )}
      </header>
      <Loader />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
