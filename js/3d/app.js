//import the three js modules necessary
import { GLTFLoader } from './threeModules/GLTFLoader.js';
import { EffectComposer } from './threeModules/EffectComposer.js';
import { RenderPass } from './threeModules/RenderPass.js';
import { UnrealBloomPass } from './threeModules/UnrealBloomPass.js';

//setup vars
let container;
let camera;
let renderer;
let scene;
let model;
let composer;

//objects fopr storing params
var bloom = {
  exposure: 0.5,
  strength: 0.95,
  threshold: 0,
  radius: 1
};
init();

function init(){


  container=document.querySelector('.scene');
  //create the scene
  scene=new THREE.Scene();
  	scene.fog = new THREE.FogExp2( 0x000000, 0.001 );
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
  //effect composer
  composer = new EffectComposer( renderer );
  composer.addPass( renderScene );
  composer.addPass( bloomPass );

  //load model
  let loader=new GLTFLoader();
  loader.load('./3d/jellyfishT3.glb',(gltf)=>{

    model = gltf.scene;

     setMaterialBodyJelly();
     setMaterialBigTentacles();
     setMaterialSmallTentacles();
    scene.add(model);
    console.log( gltf.scene.children);
  //  for(let i=3;i<14;i++){ scene.add( gltf.scene.children[2]);}

    //bloom effect

addParticles();

    animate();

  });
}
window.addEventListener( 'resize', onResize, false );
function onResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );

}
function setMaterialBodyJelly(){
  console.log(model.children[0].name);
  let material=model.children[0].children[0].material;
  console.log(model.children[0].material);
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




window.addEventListener("mousemove", onDocumentMouseMove, false);

//animation
let mouse={
  x:null,
  y:null,
  target:new THREE.Vector3(),
  windowHalfX: window.innerWidth / 2,
  windowHalfY: window.innerHeight / 2
};
function onDocumentMouseMove( event ) {
    mouse.x = ( event.clientX - mouse.windowHalfX );
    mouse.y = ( event.clientY - mouse.windowHalfY );

}

function animate(){
  requestAnimationFrame(animate);

  // mouse.target.x=(mouse.x-mouse.target.x)*0.2;
  //  mouse.target.y=(mouse.y-mouse.target.y)*-0.2;
   // mouse.target.z=camera.position.z;//+(mouse.x-mouse.target.x)*0.1+(mouse.y-mouse.target.y)*-0.1;
   // mouse.target.x=camera.position.z;
   //  mouse.target.y=(mouse.x-mouse.target.x)*0.2;


//  model.lookAt(mouse.target);
  // renderer.render(scene,camera);
   particleSystem.rotation.z += 0.0005;







  composer.render();
}
let particleSystem;
let particleCount;
let particles;
let pMaterial;
function addParticles(){
    particleCount = 1800;
    particles = new THREE.Geometry();
    let sprite = new THREE.TextureLoader().load( './Textures/spark1.png' );
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

    // now create the individual particles
    let color = new THREE.Color( 0xffffff );
    let color2 = new THREE.Color( 0xffffff );
    console.log(color);
    console.log(particles);
    let from=250;
    let to=125;
    for (var p = 0; p < particleCount; p++) {

      // create a particle with random
      // position values, -250 -> 250
      var pX = Math.random() * from - to,
          pY = Math.random() * from - to,
          pZ = Math.random() * from - to,
          particle = new THREE.Vector3 (pX, pY, pZ);

      // add it to the geometry
      particles.vertices.push(particle);
      // if(p<particleCount/2)
      //   particles.colors.push(color);
      // else
      //   particles.colors.push(color2);
    }
    console.log(particles);
    // create the particle system
     particleSystem = new THREE.Points(
        particles,
      //  pPhong);
      pMaterial);
    //  particleSystem.material.vertexColors=true;
      console.log(particleSystem);

        particleSystem.sortParticles = true;
        // add it to the scene
        scene.add(particleSystem);
}
