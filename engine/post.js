export function addPost(renderer,scene,camera){

const composer=new THREE.EffectComposer(renderer)

const renderPass=new THREE.RenderPass(scene,camera)
composer.addPass(renderPass)

const bloom=new THREE.UnrealBloomPass(
new THREE.Vector2(window.innerWidth,window.innerHeight),
.8,
.4,
.85
)
composer.addPass(bloom)

return composer
}
