/* eslint-disable react/no-unknown-property */

import { useRef, useState } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Sphere() {
  const ref:any = useRef() // hack
  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta
    ref.current.rotation.y += 0.2 * delta
  })

  const [active, setActive] = useState(0)
  // create a common spring that will be used later to interpolate other values
  const { spring } = useSpring({
    spring: active,
    config: {
      mass: 5, tension: 400, friction: 50, precision: 0.0001,
    },
  })
  // interpolate values from commong spring
  const scale = spring.to([0, 1], [1, 5])
  const rotation = spring.to([0, 1], [0, Math.PI])

  const group:any = useRef() // hack
  const gltf = useLoader(GLTFLoader, '/w11.glb')

  return (
    <a.mesh
      rotation-y={rotation}
      scale-x={scale}
      scale-z={scale}
      onClick={() => setActive(Number(!active))}
    >
      <group ref={group}>

        <directionalLight position={[3.3, 111.0, 4.4]} castShadow />
        <primitive
          ref={ref}
          object={gltf.scene}
          position={[0, 0, 2]}
        />
      </group>
    </a.mesh>
  )
}

export default Sphere
