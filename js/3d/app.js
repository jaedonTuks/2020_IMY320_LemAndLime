//import the three js modules necessary
import { GLTFLoader } from './threeModules/GLTFLoader.js';
import { EffectComposer } from './threeModules/EffectComposer.js';
import { RenderPass } from './threeModules/RenderPass.js';
import { UnrealBloomPass } from './threeModules/UnrealBloomPass.js';
import { ShaderPass } from './postprocessing/ShaderPass.js';
import { FXAAShader } from './shaders/FXAAShader.js';

//setup vars
let container;
let camera;
let renderer;
let scene;
let model;
let composer;
let antialiasPass;

//objects fopr storing params
var bloom = {
  exposure: 0.5,
  strength: 0.95,
  threshold: 0,
  radius: 1
};
let mouse={
  x:null,
  y:null,
  target:new THREE.Vector3(),
  windowHalfX: window.innerWidth / 2,
  windowHalfY: window.innerHeight / 2
};

//particle system geometry
let particleSystem;
let particleCount;
let particles;
let pMaterial;

init();

function init(){

  container=document.querySelector('.scene');
  //create the scene
  scene=new THREE.Scene();
  //scene.fog = new THREE.FogExp2( 0x000000, 0.001 );
  //setup camera
  const fov =35;
  const aspect=container.clientWidth/container.clientHeight;
  const nearPlane=0.1;
  const farPlane=500;

  camera=new THREE.PerspectiveCamera(fov,aspect,nearPlane,farPlane);

  camera.position.set(15,-1,-0.5);
  camera.lookAt(0,-1,-0.5);
  //adding lights
  const ambient=new THREE.AmbientLight(0xf0f0f0,0.8);
  scene.add(ambient);

  const light =new THREE.DirectionalLight(0xffffff,1);
  light.position.set(20,40,-20);
  scene.add(light);

  //INIT THE RENDERER;
  renderer= new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setSize(container.clientWidth,container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //bloom and render pass
  let renderScene = new RenderPass( scene, camera );

  let bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
  bloomPass.threshold = bloom.threshold;
  bloomPass.strength = bloom.strength;
  bloomPass.radius = bloom.radius;

  //anti aliaising pass shaders using fxaa
  antialiasPass=new ShaderPass(FXAAShader);
  let pixelRatio = renderer.getPixelRatio();

  antialiasPass.material.uniforms[ 'resolution' ].value.x = 1 / ( container.offsetWidth * pixelRatio );
  antialiasPass.material.uniforms[ 'resolution' ].value.y = 1 / ( container.offsetHeight * pixelRatio );


  //make the effect composer
  let width = window.innerWidth || 1;
  let height = window.innerHeight || 1;
  let parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, stencilBuffer: false };

  let renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );
  composer = new EffectComposer( renderer ,renderTarget);
  composer.addPass( renderScene );
  composer.addPass( bloomPass );
  composer.addPass( antialiasPass );



  //load model
  let loader=new GLTFLoader();
  loader.load('./media/3dModels/jellyfishT3.glb',(gltf)=>{
    //console.log(gltf.scene);
      model = gltf.scene;
      //set materials
     setMaterialBodyJelly();
     setMaterialBigTentacles();
     setMaterialSmallTentacles();
     scene.add(model);


     addParticles();

     animate();

  });
}
function setMaterialBodyJelly(){
  //console.log(model.children[0].name);
  let material=model.children[0].children[0].material;
//  console.log(model.children[0].material);
  material.transparent=true;
  material.opacity=0.75;

  material.depthTest=false;
  material.dithering=true;
  material.flatShading = false;
  material.color={r: 58 /255, g: 66/255, b: 13/255};
  material.emissiveIntensity=0.2;
  material.transmission=0.4;

  let material2=model.children[0].children[1].material;
  material2.transparent=false;
  material2.opacity=0.7;
  material2.emissiveIntensity=5;
}
function setMaterialBigTentacles(){
  let material=model.children[1].material;

  material.color={r: 163 /255, g: 49/255, b: 0/255};
  material.emissiveIntensity=9;
  material.dithering=true;
  // material.transmission=0.4;
}
function setMaterialSmallTentacles(){
    let material=model.children[2].material;
    material.color={r: 163 /255, g: 49/255, b: 0/255};
    material.emissiveIntensity=5;
    material.dithering=true;
}
function addParticles(){
    particleCount = 1800;
    particles = new THREE.Geometry();
    let sprite = new THREE.TextureLoader().load( './media/Textures/spark1.png' );
    let pPhong=new THREE.MeshPhongMaterial({
      color: 0xc95b00,
      map:sprite

    });
    pMaterial = new THREE.PointsMaterial({
      color: 0xc95b00,
      alphaTest: 0.5,
      transparent: true ,
      map:sprite,
      size: 1.5
    });


    let color = new THREE.Color( 0xffffff );
    let color2 = new THREE.Color( 0xffffff );

    let from=250;
    let to=125;
    for (var p = 0; p < particleCount; p++) {

      // create a particle with random position values
      var pX = Math.random() * from - to,
          pY = Math.random() * from - to,
          pZ = Math.random() * from - to,
          particle = new THREE.Vector3 (pX, pY, pZ);

      // add it to the geometry
      particles.vertices.push(particle);

    }

     particleSystem = new THREE.Points( particles,pMaterial);
    //  particleSystem.material.vertexColors=true;
    particleSystem.sortParticles = true;
    scene.add(particleSystem);
}


//EVENT HANDLERS
window.addEventListener( 'resize', onResize, false );
function onResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  let pixelRatio = renderer.getPixelRatio();

  antialiasPass.material.uniforms[ 'resolution' ].value.x = 1 / ( container.offsetWidth * pixelRatio );
  antialiasPass.material.uniforms[ 'resolution' ].value.y = 1 / ( container.offsetHeight * pixelRatio );

}
window.addEventListener("mousemove", onDocumentMouseMove, false);
//animation
function onDocumentMouseMove( event ) {
    mouse.x = ( event.clientX - mouse.windowHalfX );
    mouse.y = ( event.clientY - mouse.windowHalfY );

    mouse.x*=-0.0001;
    mouse.y*=-0.0001;
  //  console.log(mouse);
}


//animation function

function animate(){
  requestAnimationFrame(animate);
  model.rotation.z=mouse.x;
  model.rotation.x=mouse.y;
  particleSystem.rotation.z += 0.0005;
  composer.render();
}
