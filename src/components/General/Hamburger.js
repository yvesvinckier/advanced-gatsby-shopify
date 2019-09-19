import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Toggle = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  margin-top: 7.14vw;
  mix-blend-mode: difference;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 7.142857142857142%;
  perspective: 200px;
  transform: translateZ(0);
  .topbar {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    top: 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform-origin: right;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform: scaleX(1) translateZ(0);
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform-origin: left;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
      transform: scaleX(0) translateZ(0);
    }
  }
  .middlebar {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 4px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform-origin: left;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform: scaleX(1) translateZ(0);
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform-origin: right;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
      transform: scaleX(0) translateZ(0);
    }
  }
  .bottombar {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform-origin: right;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform: scaleX(1) translateZ(0);
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform-origin: left;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
      transform: scaleX(0) translateZ(0);
    }
  }
  &:hover {
    .topbar::before {
      transform: scaleX(0) translateZ(0);
    }
    .topbar::after {
      transform: scaleX(1) translateZ(0);
    }
    .bottombar::before {
      transform: scaleX(0) translateZ(0);
    }
    .bottombar::after {
      transform: scaleX(1) translateZ(0);
    }
    .middlebar::before {
      transform: scaleX(0) translateZ(0);
    }
    .middlebar::after {
      transform: scaleX(1) translateZ(0);
    }
  }
`

const ToggleIcon = styled.div`
  position: relative;
  width: 22px;
  height: 10px;
  margin-left: 20px;
`

function Hamburger({ toggle, opened }) {
    const BarOneAnimation = useSpring({
        transform: opened
            ? `rotate(-45deg) translateY(6px)`
            : `rotate(0deg) translateY(0px)`,
    })
    const BarTwoAnimation = useSpring({
        transform: opened
            ? `scaleX(0)`
            : `scaleX(1)`,
    })
    const BarThreeAnimation = useSpring({
        transform: opened
            ? `rotate(45deg) translateY(-6px)`
            : `rotate(0deg) translateY(0px)`,
    })
    return (
        <Toggle onClick={toggle}>
            <ToggleIcon>
                <animated.span className="topbar" style={BarOneAnimation} />
                <animated.span className="middlebar" style={BarTwoAnimation} />
                <animated.span className="bottombar" style={BarThreeAnimation} />
            </ToggleIcon>
        </Toggle>
    )
}

export default Hamburger
