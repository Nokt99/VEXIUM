import {initScene,updateScene} from './scene.js'
import {runGlitch} from './glitch.js'

let clock=new THREE.Clock()
let mouse={x:0,y:0}

window.addEventListener('mousemove',e=>{
mouse.x=(e.clientX/window.innerWidth-.5)*2
mouse.y=(e.clientY/window.innerHeight-.5)*2
})

const {scene,camera,renderer,composer,knight}=initScene()

function animate(){
requestAnimationFrame(animate)
let t=clock.getElapsedTime()
updateScene(camera,knight,mouse,t)
composer.render()
}
animate()

setInterval(()=>runGlitch(composer,knight),20000+Math.random()*20000)
