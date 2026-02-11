import {PixelNoiseShader} from './shaders/pixelNoise.js'
import {BlueStainShader} from './shaders/blueStain.js'
import {CorruptionShader} from './shaders/corruption.js'

export function addPost(renderer,scene,camera){

const composer=new THREE.EffectComposer(renderer)

const renderPass=new THREE.RenderPass(scene,camera)
composer.addPass(renderPass)

const bloom=new THREE.UnrealBloomPass(
new THREE.Vector2(window.innerWidth,window.innerHeight),
.9,
.5,
.85
)
composer.addPass(bloom)

const bluePass=new THREE.ShaderPass(BlueStainShader)
composer.addPass(bluePass)

const noisePass=new THREE.ShaderPass(PixelNoiseShader)
composer.addPass(noisePass)

const corruptPass=new THREE.ShaderPass(CorruptionShader)
composer.addPass(corruptPass)

composer.userData={
noisePass,
corruptPass
}

return composer
}
