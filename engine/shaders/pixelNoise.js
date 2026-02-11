export const PixelNoiseShader={
uniforms:{
tDiffuse:{value:null},
time:{value:0}
},
vertexShader:`
varying vec2 vUv;
void main(){
vUv=uv;
gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
}
`,
fragmentShader:`
uniform sampler2D tDiffuse;
uniform float time;
varying vec2 vUv;

float rand(vec2 co){
return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);
}

void main(){
vec4 base=texture2D(tDiffuse,vUv);

vec2 grid=floor(vUv*vec2(240.0,135.0))/vec2(240.0,135.0);
float noise=rand(grid+floor(time))*0.12;

vec3 col=base.rgb+vec3(noise);

gl_FragColor=vec4(col,1.0);
}
`
}
