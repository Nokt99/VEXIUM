import {createScene} from './scene.js'
import {createKnight} from '../knight/knight.js'
import {addPost} from './post.js'

const {scene,camera,renderer}=createScene()
const knight=createKnight()
scene.add(knight)

const composer=addPost(renderer,scene,camera)

let clock=new THREE.Clock()

function animate(){
requestAnimationFrame(animate)

let t=clock.getElapsedTime()

knight.userData.update(t)

composer.userData.noisePass.uniforms.time.value=t
composer.userData.corruptPass.uniforms.time.value=t

composer.render()
}

animate()

setInterval(()=>{
let level=Math.random()
if(level>.75){
composer.userData.corruptPass.uniforms.intensity.value=1.0
setTimeout(()=>{
composer.userData.corruptPass.uniforms.intensity.value=.4
},200)
}else{
composer.userData.corruptPass.uniforms.intensity.value=.5
setTimeout(()=>{
composer.userData.corruptPass.uniforms.intensity.value=.2
},120)
}
},6000+Math.random()*5000)
