export function addGlitchSystem(composer,knight){

setInterval(()=>{
let intensity=Math.random()

if(intensity>.7){
composer.passes[1].strength=2.2
knight.rotation.y+=.3
setTimeout(()=>{
composer.passes[1].strength=.8
},200)
}else{
composer.passes[1].strength=1.2
setTimeout(()=>{
composer.passes[1].strength=.8
},120)
}

},8000+Math.random()*6000)
}
