'use client'

import { useRef,useEffect, useState  } from 'react'
import {
  Canvas, useFrame, extend, useThree,
} from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, SpotLight, ambientLight } from '@react-three/drei'
import Sphere from './Sphere'
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import styles from './InteractiveSphere.module.scss'

extend({ OrbitControls })

const Controls = () => {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <OrbitControls ref={ref} args={[camera, gl.domElement]} />
}

function Scene() {




  return (
    <div className={styles.wrap}>
      <Canvas style={{ background: '#F2F2F2' }} linear flat>
        {/* <Controls /> */}
        <PerspectiveCamera
          fov={100}
          aspect={window.innerWidth / window.innerHeight}
          near={1}
          far={1000}
          position={[0, 0, 10]}
        />
        <ambientLight intensity={1.2} />
        {/* <SpotLight
          distance={5}
          angle={0.15}
          attenuation={5}
          anglePower={5} // Diffuse-cone anglePower (default: 5)
        /> */}
        { /* camera.position.set(15, 20, 30); */ }
        {/* <PointLight color='0xffccdd' /> */}
        {/* <axesHelper /> */}
          <Sphere />

      </Canvas>
    </div>
  )
}

export default Scene
