import React, { useState } from 'react'
import Hamburger from './Hamburger'
// import Menu from './Menu'

const Nav = () => {
    const [opened, setOpened] = useState(false)

    const toggle = () => {
        setOpened(!opened)
    }

    return (
        <header>
            <Hamburger opened={opened} toggle={toggle} />
            {/* <Menu opened={opened} /> */}
        </header>
    )
}
export default Nav
