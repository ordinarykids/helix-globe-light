'use client'

import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect, useState, useRef } from 'react'
import { Canvas, useFrame, OrbitControls, useThree } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations, extend } from '@react-three/drei'

import useScrollPosition from "./useScrollPosition";

// extend({ OrbitControls })

const Controls = () => {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <OrbitControls ref={ref} args={[camera, gl.domElement]} />
}

function Sphere() {

  const scrollPosition = useScrollPosition();

  console.log(scrollPosition); // Here, we are printing the scrollPosition on the console. It will print a new value every time it is updated.




  return (
   <div className="sphereWrap">
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={1} />
      {/* <Controls /> */}
      {/* <fog attach="fog" args={['#ff5020', 5, 18]} /> */}
      {/* <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow /> */}
      {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
      <Suspense fallback={null}>
        {/* Wrap contents you want to scroll into <ScrollControls> */}
        <ScrollControls pages={3}>
          <HelixSphere scale={2} position={[0, 2.5, 0]} />
        </ScrollControls>
      </Suspense>
    </Canvas>
    {/* <div cla></div> */}
    </div>
  )
}


function HelixSphere({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, nodes, animations } = useGLTF('/wtf-15.glb')
  const { actions } = useAnimations(animations, scene)
  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
 // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  useFrame((state, delta) => {
    const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
   // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -.4)

    state.camera.lookAt(0, 0, 0)
  })
  return <primitive object={scene} {...props} />
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload('/wtf-15.glb')



export default Sphere
