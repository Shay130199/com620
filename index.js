const canvas = document.getElementById('canvas1');

const camera = new THREE.PerspectiveCamera(40, 1.33, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const scene = new THREE.Scene();

const geom = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geom, material);
mesh.position.z = -6;
//mesh.position.x = 1;
//mesh.position.y = 0;
camera.position.z = -3;
scene.add(mesh);



document.getElementById("button1").addEventListener("click", e => {
	camera.position.x++
});

document.getElementById("button_2").addEventListener("click", e => {
	camera.position.x--
});

document.getElementById("button_3").addEventListener("click", e => {
	camera.position.y++
});

document.getElementById("button_4").addEventListener("click", e => {
	camera.position.y--
});

document.getElementById("button_5").addEventListener("click", e => {
	camera.position.z++
});

document.getElementById("button_6").addEventListener("click", e => {
	camera.position.z--
});

document.getElementById("button_7").addEventListener("click", e => {
	camera.rotation.y += THREE.Math.degToRad(10)
});

document.getElementById("button_8").addEventListener("click", e => {
	camera.rotation.y -= THREE.Math.degToRad(10)
});

//-------- SHAPE 2  arrow------------------------------------------------//

const geom_1 = new THREE.BoxGeometry(1,1,1);
const material_1 = new THREE.MeshBasicMaterial({color: 0x0000ff});
const mesh_1 = new THREE.Mesh(geom_1, material_1);
mesh_1.position.x = 4;
scene.add(mesh_1);

//-------- SHAPE 3 ------------------------------------------------//

const geom_2 = new THREE.SphereGeometry(1);
const material_2 = new THREE.MeshBasicMaterial({color: 0xffff00});
const mesh_2 = new THREE.Mesh(geom_2, material_2);
mesh_2.position.x = 7;
scene.add(mesh_2);

//-------- SHAPE 4------------------------------------------------//

const geom_3 = new THREE.ConeGeometry(1);
const material_3 = new THREE.MeshBasicMaterial({color: 0xff00ff});
const mesh_3 = new THREE.Mesh(geom_3, material_3);
mesh_3.position.x = 10;
scene.add(mesh_3);

//-------- SHAPE 5------------------------------------------------//

const geom_4 = new THREE.CylinderGeometry(1,1,1);
const material_4 = new THREE.MeshBasicMaterial({color: 0x0000ff});
const mesh_4 = new THREE.Mesh(geom_4, material_4);
mesh_4.position.x = 12;
scene.add(mesh_4);


requestAnimationFrame(renderScene);

const rad = THREE.Math.degToRad(deg);

function renderScene() {
    renderer.render(scene, camera);
    requestAnimationFrame(renderScene);
}
