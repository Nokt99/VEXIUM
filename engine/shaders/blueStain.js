export const BlueStainShader={
uniforms:{
tDiffuse:{value:null}
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
varying vec2 vUv;

float circle(vec2 uv,vec2 pos,float r){
return smoothstep(r,r-0.2,length(uv-pos));
}

void main(){
vec4 base=texture2D(tDiffuse,vUv);

float stain1=circle(vUv,vec2(0.3,0.6),0.5);
float stain2=circle(vUv,vec2(0.7,0.4),0.6);

vec3 blue=vec3(0.0,0.1,0.3)*(stain1+stain2)*0.6;

gl_FragColor=vec4(base.rgb+blue,1.0);
}
`
}
