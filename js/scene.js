import {createKnight} from './knight.js'

export function initScene(){

const scene=new THREE.Scene()
scene.fog=new THREE.FogExp2(0x05070a,.12)

const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,100)
camera.position.set(0,1.6,6)

const renderer=new THREE.WebGLRenderer({antialias:true})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.getElementById('webgl').appendChild(renderer.domElement)

const hemi=new THREE.HemisphereLight(0x223344,0x000000,.6)
scene.add(hemi)

const dir=new THREE.DirectionalLight(0xffffff,.5)
dir.position.set(3,6,4)
scene.add(dir)

const knight=createKnight()
scene.add(knight)

const composer=new THREE.EffectComposer(renderer)
composer.addPass(new THREE.RenderPass(scene,camera))
const bloom=new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth,window.innerHeight),.6,.4,.85)
composer.addPass(bloom)

window.addEventListener('resize',()=>{
camera.aspect=window.innerWidth/window.innerHeight
camera.updateProjectionMatrix()
renderer.setSize(window.innerWidth,window.innerHeight)
composer.setSize(window.innerWidth,window.innerHeight)
})

return{scene,camera,renderer,composer,knight}
}

export function updateScene(camera,knight,mouse,t){
camera.position.x=mouse.x*.6
camera.position.y=1.6+mouse.y*.3
camera.lookAt(0,1,0)

knight.rotation.y=mouse.x*.2
knight.children[1].material.emissiveIntensity=.8+Math.sin(t*.8)*.2
}
