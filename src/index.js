import * as THREE from 'three'

// Renderer section here
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

const scene = new THREE.Scene()

const material = new THREE.LineBasicMaterial( { color: 0x00ffff } )
const points = []
points.push( new THREE.Vector3(-20, 0, 0) )
points.push( new THREE.Vector3(0, 10, 0) )
points.push( new THREE.Vector3(0, 0, 0) )

const geometry = new THREE.BufferGeometry().setFromPoints( points )

const line = new THREE.Line( geometry, material )

scene.add( line )

function animation () {
    requestAnimationFrame( animation )
    renderer.render( scene, camera)
}

animation()