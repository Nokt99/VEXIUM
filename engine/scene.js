export function createScene(){

const scene=new THREE.Scene()
scene.fog=new THREE.FogExp2(0x000000,.08)

const camera=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,.1,100)
camera.position.set(0,2.2,6)

const renderer=new THREE.WebGLRenderer({antialias:true})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.outputColorSpace=THREE.SRGBColorSpace
document.getElementById('webgl').appendChild(renderer.domElement)

const hemi=new THREE.HemisphereLight(0x222233,0x000000,.6)
scene.add(hemi)

const dir=new THREE.DirectionalLight(0xffffff,.7)
dir.position.set(4,6,5)
scene.add(dir)

window.addEventListener('resize',()=>{
camera.aspect=window.innerWidth/window.innerHeight
camera.updateProjectionMatrix()
renderer.setSize(window.innerWidth,window.innerHeight)
})

return{scene,camera,renderer}
}
