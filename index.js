import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#1B1F3A');
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const light = new THREE.PointLight(0xFFFFFF, 40);
light.position.set(-2,.1,2);

scene.add(light);


const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );


const geometry = new THREE.SphereGeometry( 1,64, 64);
const material = new THREE.MeshLambertMaterial( { color: '#ff7844'} );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(-3, -1 ,0);
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera,);
}
	animate();
