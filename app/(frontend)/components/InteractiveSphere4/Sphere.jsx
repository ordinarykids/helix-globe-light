/* eslint-disable react/no-unknown-property */


import { useRef,useEffect,useMemo, useState  } from 'react'
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

function Sphere() {
  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2* delta
    ref.current.rotation.y += 0.2 * delta
  })


  const [active, setActive] = useState(0);
  // create a common spring that will be used later to interpolate other values
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  // interpolate values from commong spring
  // const scale = spring.to([0, 1], [1, 5]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#6246ea", "#e45858"]);

  const group = useRef()
  const textureGroup = new THREE.Group()
  const gltf = useLoader(GLTFLoader, './wtf-15.glb')

  return (
    <a.mesh
      // rotation-y={rotation}
      // scale-x={scale}
      // scale-z={scale}
      // onClick={() => setActive(Number(!active))}
    >
    <group ref={group}>

      {/* <directionalLight position={[300.3, 111.0, 400.4]} castShadow /> */}
      {/* <meshBasicMaterial /> */}
      <primitive
        ref={ref}
        object={gltf.scene}
        position={[0, 0, 2]}
      />
      {/* <OrbitControls  /> */}
    </group>
    </a.mesh>
  )
}

export default Sphere
