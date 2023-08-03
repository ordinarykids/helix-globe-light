'use client'

/* eslint-disable */
import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations } from '@react-three/drei'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './InteractiveSphere.module.scss'


// import useScrollPosition from "./useScrollPosition";

// extend({ OrbitControls })

// const Controls = () => {
//   const { camera, gl } = useThree()
//   const ref = useRef()
//   useFrame(() => ref.current.update())
//   return <OrbitControls ref={ref} args={[camera, gl.domElement]} />
// }

function Sphere() {

  // const scrollPosition = useScrollPosition();

  // console.log(scrollPosition); // Here, we are printing the scrollPosition on the console. It will print a new value every time it is updated.

  const sphereWrapRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const onScroll = () => {
      if (sphereWrapRef.current) {
        const currentScrollY = window.scrollY
        // const scaleUpPerPxScroll = 1 + (currentScrollY / 100)
        // sphereWrapRef.current.style.transform = `scale(${scaleUpPerPxScroll}) translateX(-${currentScrollY}px)`
        sphereWrapRef.current.style.opacity = `${Math.max(1 - (currentScrollY / 900), 0)}`
        // sphereWrapRef.current.style.top = `${Math.max(1 - (currentScrollY / 900), 0)}`

        // sphereWrapRef.current.style.transform = `translateY(${currentScrollY}px)`
        sphereWrapRef.current.style.left = '200px'
        if (currentScrollY > 400) {
          // sphereWrapRef.current.style.position = 'relative'
        }

      }


    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <div id='interactiveSphere' className={styles.wrap} ref={sphereWrapRef}>
      /* tslint:disable */
      <Canvas  shadows camera={{ position: [0, 0, 1] }} onCreated={((state) => ScrollTrigger.refresh())}>
        <ambientLight intensity={1} />
        {/* <Controls /> */}
        {/* <fog attach="fog" args={['#ff5020', 5, 18]} /> */}
        {/* <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow /> */}
        {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
        <HelixSphere scale={3} position={[0, 1, 1]} />
      </Canvas>
      {/* <div cla></div> */}
    </div>
  )
}


function HelixSphere({ ...props }) {

  const sphereWrapRef = useRef<HTMLDivElement | null>(null)


  const [currentScrollY, setCurrentScrollY] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      if (sphereWrapRef.current) {
        setCurrentScrollY(window.scrollY)
        // const scaleUpPerPxScroll = 1 + (currentScrollY / 100)
        // sphereWrapRef.current.style.transform = `scale(${scaleUpPerPxScroll}) translateX(-${currentScrollY}px)`
        // sphereWrapRef.current.style.opacity = `${Math.max(1 - (currentScrollY / 1000), 0)}`
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, animations } = useGLTF('/wtf-15.glb')
  const { actions } = useAnimations(animations, scene)
  //useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  useFrame((state, delta) => {
    // const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - currentScrollY / 900;
    // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    state.camera.position.set(Math.sin(offset) * -9, Math.atan(offset * Math.PI * 2) * 9, Math.cos((offset * Math.PI) / 3) * -.4)
    state.camera.rotation.set(0, offset * 42, offset * 2)
    state.camera.lookAt(0, 0, 0)
  })
  return <primitive object={scene} {...props} ref={sphereWrapRef} />
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload('/wtf-15.glb')



export default Sphere
