import React from 'react'
import { useSpring, animated } from 'react-spring'
import './styles.css' // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans_bg = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans_ty = (x, y) => `translate3d(${x / 3 - 250}px,${y / 3 - 25}px,0)`
const trans_te = (x, y) => `translate3d(${x / 3 + 230}px,${y / 3 - 70}px,0)`
const trans_bl = (x, y) => `translate3d(${x / 3.5 - 230}px,${y / 3.5 + 80}px,0)`
const trans_br = (x, y) => `translate3d(${x / 3.5 + 270}px,${y / 3.5 + 85}px,0)`



const Parallax = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="bg" style={{ transform: props.xy.interpolate(trans_bg) }} />
      <animated.div class="bodyright" style={{ transform: props.xy.interpolate(trans_br) }} />
      <animated.div class="bodyleft" style={{ transform: props.xy.interpolate(trans_bl) }} />
      <animated.div class="tyler" style={{ transform: props.xy.interpolate(trans_ty) }} />
      <animated.div class="teagan" style={{ transform: props.xy.interpolate(trans_te) }} />
    </div>
  )
}

export default Parallax;