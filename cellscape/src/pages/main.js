import { cameraPosition, color } from "three/webgpu";
import "./index.css"

import * as THREE from 'three';
import { Wireframe } from "@react-three/drei";
import { Main } from "next/document";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000)

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg")
})

renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize(window.innerWidth, window.innerHeight)4
cameraPosition.setZ(30)
renderer.render( scene, camera)

const geometry = new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshBasicMaterial({color:0xFF6347, Wireframe:true})
const torus = new THREE.Mesh(geometry,material)

scene.add(torus)

function animate(){
    requestAnimationFrame(animate )
    renderer.render(scene,camera)

}

animate()

export default Main