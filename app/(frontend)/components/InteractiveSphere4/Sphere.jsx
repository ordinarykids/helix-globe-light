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
  const scale = spring.to([0, 1], [1, 5]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#6246ea", "#e45858"]);

  const group = useRef()
  const textureGroup = new THREE.Group()
  const gltf = useLoader(GLTFLoader, './w2.glb')

  return (
    <a.mesh
      rotation-y={rotation}
      scale-x={scale}
      scale-z={scale}
      onClick={() => setActive(Number(!active))}
    >
    <group ref={group}>

    {/* <directionalLight position={[3.3, 1.0, 4.4]} castShadow /> */}
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0, 1, 0]}
      // children-0-castShadow
    />
    {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
      <meshStandardMaterial />
    </Circle> */}
    <OrbitControls target={[0, 1, 0]} />
    {/* <axesHelper args={[5]} /> */}



{/*     
      <points geometry={pointsGeometry1} material={pointsMaterial1} />
      <points geometry={pointsGeometry2} material={pointsMaterial2} />
      <points geometry={pointsGeometry3} material={pointsMaterial3} />
      <points geometry={pointsGeometry4} material={pointsMaterial4} />
      <mesh geometry={meshGeometry} material={meshMaterial} emissive={new THREE.Color(0xcccccc)} />  */}
      {/* <mesh   >
        <Wireframe
          geometry={meshGeometry} // Will create the wireframe based on input geometry.

          // Other props
       //   simplify={true} // Remove some edges from wireframes
          fill={"#FF0000"} // Color of the inside of the wireframe
          fillMix={0.5} // Mix between the base color and the Wireframe 'fill'. 0 = base; 1 = wireframe
          fillOpacity={0} // Opacity of the inner fill
          stroke={"#000000"} // Color of the stroke
          strokeOpacity={.8} // Opacity of the stroke
          thickness={0.001} // Thinkness of the lines
          colorBackfaces={true} // Whether to draw lines that are facing away from the camera
          backfaceStroke={"#000000"} // Color of the lines that are facing away from the camera
          // dashInvert={true} // Invert the dashes
          // dash={false} // Whether to draw lines as dashes
          // dashRepeats={4} // Number of dashes in one seqment
          // dashLength={0.5} // Length of each dash
          squeeze={true} // Narrow the centers of each line segment
          squeezeMin={1} // Smallest width to squueze to
          squeezeMax={1} // Largest width to squeeze from
        />
      </mesh> */}
      
    </group>
    </a.mesh>
  )
}

export default Sphere
