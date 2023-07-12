/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry'
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils'
import { TextureLoader } from 'three'
import { Wireframe } from '@react-three/drei'
import * as THREE from 'three'

function Sphere() {
  const group = useRef()
  const textureGroup = new THREE.Group()

  // Define wiframe colors
  const wireframeWireColor = '0xCCCCCC';

  const sphereGeometry = useMemo(() => {
    const geometry = new THREE.SphereGeometry(3, 12, 6)
    geometry.deleteAttribute('normal')
    geometry.deleteAttribute('uv')
    return BufferGeometryUtils.mergeVertices(geometry)
  }, [])

  const texture = useMemo(() => new TextureLoader().load('/circle.png'), [])
  const texture2 = useMemo(() => new TextureLoader().load('/diamond.png'), [])
  const texture3 = useMemo(() => new TextureLoader().load('/hexagon.png'), [])
  const texture4 = useMemo(() => new TextureLoader().load('/triangle.png'), [])

  useFrame(() => {
    group.current.rotation.y += 0.001
    group.current.rotation.x -= 0.001
    group.current.rotation.z += 0.001
  })

  const vertices = [];
  const vertices1 = [];
  const vertices2 = [];
  const vertices3 = [];
  const vertices4 = [];
  const positionAttribute = sphereGeometry.getAttribute('position')

  for (let i = 0; i < positionAttribute.count; i += 1) {
    const vertex = new THREE.Vector3()
    vertex.fromBufferAttribute(positionAttribute, i)
    vertices.push(vertex)

    switch (i % 4) { // values will be in the range 0 to 3 inclusive
      case 0:
        // do something 1
        vertices1.push(vertex)
        break
      case 1:
        // do something 2
        vertices2.push(vertex)
        break
      case 2:
        // do something 3
        vertices3.push(vertex)
        break
      default:
        // do something 4
        vertices4.push(vertex)
    }
  }

  const pointsMaterial = new THREE.PointsMaterial({
    map: texture,
    size: 10,
    alphaTest: 0.9,
  })

  const pointsMaterial1 = new THREE.PointsMaterial({
    // color: 0xFF3333,
    map: texture,
    size: 10,
    alphaTest: 0.9,
  })

  const pointsMaterial2 = new THREE.PointsMaterial({
    // color: 0xFF3333,
    map: texture2,
    size: 10,
    alphaTest: 0.9,
  })

  const pointsMaterial3 = new THREE.PointsMaterial({
    // color: 0xFF3333,
    map: texture3,
    size: 10,
    alphaTest: 0.9,
  })

  const pointsMaterial4 = new THREE.PointsMaterial({
    // color: 0xFF3333,
    map: texture4,
    size: 10,
    alphaTest: 0.9,
  })

  // s[phere1
  const pointsGeometry1 = new THREE.BufferGeometry().setFromPoints(vertices1)
  const points1 = new THREE.Points(pointsGeometry1, pointsMaterial1)
  textureGroup.add(points1)

  // vertices2
  const pointsGeometry2 = new THREE.BufferGeometry().setFromPoints(vertices2)
  const points2 = new THREE.Points(pointsGeometry2, pointsMaterial2)
  textureGroup.add(points2)

  // vertices3
  const pointsGeometry3 = new THREE.BufferGeometry().setFromPoints(vertices3)
  const points3 = new THREE.Points(pointsGeometry3, pointsMaterial3)
  textureGroup.add(points3)

  // vertices4
  const pointsGeometry4 = new THREE.BufferGeometry().setFromPoints(vertices4)
  const points4 = new THREE.Points(pointsGeometry4, pointsMaterial4)
  textureGroup.add(points4)

  const pointsGeometry = new THREE.BufferGeometry().setFromPoints(vertices)
  // const pointsGeometry = new THREE.BufferGeometry().setFromPoints(vertices)

  // const meshMaterial = new THREE.MeshLambertMaterial({

  //   opacity: 0.5,
  //   side: THREE.DoubleSide,
  //   transparent: false,
  //   wireframe: true,
  // })
  // //meshMaterial.color.setHex(wireframeWireColor);
  // // DRAW WIREFRAME FOR EACH VERTEX
  // meshMaterial.color.setHex('0xffffcc');

  const meshGeometry = new ConvexGeometry(vertices)

  return (
    <group ref={group}>
      <points geometry={pointsGeometry1} material={pointsMaterial1} />
      <points geometry={pointsGeometry2} material={pointsMaterial2} />
      <points geometry={pointsGeometry3} material={pointsMaterial3} />
      <points geometry={pointsGeometry4} material={pointsMaterial4} />
      <mesh   >
        <Wireframe
          geometry={meshGeometry} // Will create the wireframe based on input geometry.

          // Other props
       //   simplify={true} // Remove some edges from wireframes
          fill={"#cccccc"} // Color of the inside of the wireframe
          fillMix={1} // Mix between the base color and the Wireframe 'fill'. 0 = base; 1 = wireframe
          fillOpacity={0} // Opacity of the inner fill
          stroke={"#cccccc"} // Color of the stroke
          strokeOpacity={1} // Opacity of the stroke
          thickness={0.01} // Thinkness of the lines
          colorBackfaces={false} // Whether to draw lines that are facing away from the camera
          backfaceStroke={"#c33333"} // Color of the lines that are facing away from the camera
          // dashInvert={true} // Invert the dashes
          // dash={false} // Whether to draw lines as dashes
          // dashRepeats={4} // Number of dashes in one seqment
          // dashLength={0.5} // Length of each dash
          squeeze={true} // Narrow the centers of each line segment
          squeezeMin={1} // Smallest width to squueze to
          squeezeMax={1} // Largest width to squeeze from
        />
      </mesh>
      
    </group>
  )
}

export default Sphere
