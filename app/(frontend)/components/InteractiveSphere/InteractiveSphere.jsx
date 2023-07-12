'use client'

import { useRef } from 'react'
import {
  Canvas, useFrame, extend, useThree,
} from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import Sphere from './Sphere'
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
      <Canvas style={{ background: '#F2F2F2' }}>
        {/* <Controls /> */}
        <PerspectiveCamera
          fov={10}
          aspect={window.innerWidth / window.innerHeight}
          near={1}
          far={1000}
          position={[0, 0, 10]}
        />

        { /* camera.position.set(15, 20, 30); */ }
        {/* <pointLight color='0xffccdd' /> */}
        {/* <axesHelper /> */}
        <Sphere />
      </Canvas>
    </div>
  )
}

export default Scene
