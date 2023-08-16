// @ts-nocheck
'use client'

/* eslint-disable */
import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations } from '@react-three/drei'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import styles from './InteractiveSphere.module.scss'


function Sphere() {

  const sphereWrapRef = useRef<HTMLDivElement | null>(null)
  const [globePosition, setGlobePosition] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      // if (sphereWrapRef.current) {
      //   const currentScrollY = window.scrollY
      //   sphereWrapRef.current.style.opacity = `${Math.max(1 - (currentScrollY / 900), 0)}`
      // }
      if (window.innerWidth < 800) {
        setGlobePosition([1, 5, 4])
      } else {
        setGlobePosition([15, 5, 2])
      }
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll);
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
 

  return (
    <div id='interactiveSphere' className={styles.wrap} ref={sphereWrapRef}>
      <Canvas shadows camera={{ position: [1, 10, 80], fov: 30 }} onCreated={((state) => ScrollTrigger.refresh())}>
        <ambientLight intensity={1} />
        <HelixSphere scale={9} position={globePosition} />
      </Canvas>
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
      }
      // plays animation when page is scrolled.
      //actions['firstAction'].play().paused = false
    }
    window.addEventListener('scroll', onScroll)
    onScroll();
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-nocheck

  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, animations } = useGLTF('/wtf-20-darker.glb')
  const { actions } = useAnimations(animations, scene)
  //useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
 // useEffect(() => void (actions['firstAction'].play().paused = true), [actions])
  // useFrame((state, delta) => { 
  //   // const action = actions['Take 001']
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1 - currentScrollY / 900;
  //  // console.log(offset)
  //   // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(10 / offset, 1 * offset*4, 120*offset)
  //   state.camera.rotation.set(0, offset * 42, offset * 2)
  //   state.camera.lookAt(0, 0, 0)
  //   //console.log(state.camera)
  // })

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(sphereWrapRef.current.rotation, 
        { z: "+=.03", repeat: -1, ease: 'none', repeatRefresh: true })
      gsap.to(sphereWrapRef.current.rotation,
        { y: "-=.03", repeat: -1, ease: 'none', repeatRefresh: true })
      gsap.to(sphereWrapRef.current.rotation,
        { x: "+=.03", repeat: -1, ease: 'none', repeatRefresh: true })
    }, sphereWrapRef); // <- scopes all selector text inside the context to this component (optional, default is document)
    return () => ctx.revert(); // cleanup! 

  }, []);



  
  return <primitive object={scene} {...props} ref={sphereWrapRef} />
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload('/wtf-20-darker.glb')



export default Sphere
