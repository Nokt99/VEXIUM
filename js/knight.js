export function createKnight(){

const group=new THREE.Group()

const bronze=new THREE.MeshStandardMaterial({
color:0x6e4a2f,
metalness:.85,
roughness:.45
})

const gold=new THREE.MeshStandardMaterial({
color:0x8c6b1f,
metalness:1,
roughness:.3,
emissive:0x331a00,
emissiveIntensity:.2
})

const eyeMat=new THREE.MeshStandardMaterial({
color:0xff0000,
emissive:0xff0000,
emissiveIntensity:1
})

const body=new THREE.Mesh(new THREE.CylinderGeometry(.9,1.1,2.2,32),bronze)
body.position.y=1
group.add(body)

const helmet=new THREE.Mesh(new THREE.SphereGeometry(.8,32,32),bronze)
helmet.position.y=2.3
helmet.scale.y=.8
group.add(helmet)

const visor=new THREE.Mesh(new THREE.BoxGeometry(.9,.2,.2),bronze)
visor.position.set(0,2.3,.6)
group.add(visor)

const eyeL=new THREE.Mesh(new THREE.BoxGeometry(.18,.05,.05),eyeMat)
eyeL.position.set(-.18,2.3,.7)
group.add(eyeL)

const eyeR=eyeL.clone()
eyeR.position.x=.18
group.add(eyeR)

return group
}
