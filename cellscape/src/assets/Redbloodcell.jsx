/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 redbloodcell.gltf 
*/

import React from 'react'
import * as THREE from 'three';


import { useGLTF } from '@react-three/drei'

export default function RedBloodCell(props) {
  const { nodes, materials } = useGLTF('/redbloodcell.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['red blood cell']} position={[0.458, 1.7, -0.098]} rotation={[-1.002, 1.443, 2.354]} scale={[1.676, 0.812, 1.462]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['background pic']} scale={7.773} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['background pic']} position={[0.294, 1.771, -2.342]} rotation={[0.908, 1.549, 0.521]} scale={[7.568, 7.519, 7.568]} />
    </group>
  )
}

useGLTF.preload('/redbloodcell.gltf')
