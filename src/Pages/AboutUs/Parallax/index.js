import React from 'react'
import { useSpring, animated } from 'react-spring'
import './styles.css'
import useWindowSize from '../../../Utils/useWindowSize'


const Parallax = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  const size = useWindowSize();

  var bodyShift = {
    'bl_x': -230, 'bl_y': 80,
    'br_x': 270, 'br_y': 85
  }
  var faceShift = {
    'ty_x': -250, 'ty_y': -25,
    'te_x': 230, 'te_y': -70
  }

  if (size.width < 600) {
    Object.keys(bodyShift).map((key, index) => (bodyShift[key] *= (1/2)));
    Object.keys(faceShift).map((key, index) => (faceShift[key] *= (1/2)));
  }


  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans_bg = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
  const trans_ty = (x, y) => `translate3d(${x / 3 + faceShift.ty_x}px,${y / 3 + faceShift.ty_y}px,0)`
  const trans_te = (x, y) => `translate3d(${x / 3 + faceShift.te_x}px,${y / 3 + faceShift.te_y}px,0)`
  const trans_bl = (x, y) => `translate3d(${x / 3.5 + bodyShift.bl_x}px,${y / 3.5 + bodyShift.bl_y}px,0)`
  const trans_br = (x, y) => `translate3d(${x / 3.5 + bodyShift.br_x}px,${y / 3.5 + bodyShift.br_y}px,0)`

  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="bg" style={{ transform: props.xy.interpolate(trans_bg) }} />
      <animated.div className="bodyright" style={{ transform: props.xy.interpolate(trans_br) }} />
      <animated.div className="bodyleft" style={{ transform: props.xy.interpolate(trans_bl) }} />
      <animated.div className="tyler" style={{ transform: props.xy.interpolate(trans_ty) }} />
      <animated.div className="teagan" style={{ transform: props.xy.interpolate(trans_te) }} />
    </div>
  )
}

export default Parallax;