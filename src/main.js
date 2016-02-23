var conf = require('./conf.js');
var mapGenerator = require('./generators/map.js');

console.log(mapGenerator()); 

//THREEJS RELATED VARIABLES 
var scene; 
var camera;
var fieldOfView = 75;
var aspectRatio;
var nearPlane = 1;
var farPlane = 2000;
var renderer;

//SCREEN VARIABLES
var HEIGHT;
var WIDTH;

//INIT THREE JS AND SCREEN
function init(){
	scene = new THREE.Scene();
	
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	aspectRatio = WIDTH / HEIGHT;

	camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
	camera.position.z = 5;
	
	renderer = new THREE.WebGLRenderer({
		antialias: true,
		precision: "mediump"
	});
	renderer.setClearColor( 0xebe5e7, 1 );
	renderer.setSize(WIDTH, HEIGHT);
	renderer.shadowMap.enabled = true;
	
	document.body.appendChild(renderer.domElement);
	
	

	var geometry = new THREE.BoxGeometry(1, 1, 1);
	
	var material = new THREE.MeshPhongMaterial({
		color: 0xff3300,
		specular: 0x555555,
		shininess: 30
	});
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	cube.position.x = 1

	var material2 = new THREE.MeshPhongMaterial({
		map: THREE.ImageUtils.loadTexture('textures/ground.jpg')
	});
	var cube2 = new THREE.Mesh(geometry, material2);
	scene.add(cube2);
	cube2.position.x = -1;

	var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
	directionalLight.position.set(10, 10, 10);
	scene.add(directionalLight);

	window.addEventListener('resize', onWindowResize, false);

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	function render() {
		cube.rotation.x += 0.05;
		cube.rotation.y += 0.03;
		cube2.rotation.x += 0.05;
		cube2.rotation.y += 0.03;

		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
}

function onWindowResize() {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();
}

init();

/*
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
	antialias: true,
	precision: "mediump"
});

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	windowHalfX = WIDTH / 2;
	windowHalfY = HEIGHT / 2;
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();
}

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function render() {
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;

	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
render();
*/