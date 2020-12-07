loader.load(
					'/Path/YourModel.gltf',										
					function ( gltf ) {
override material
var model = gltf.scene;
var newMaterial = new THREE.MeshStandardMaterial({color: 0xcccccc});
model.traverse((o) => {
if (o.isMesh) o.material = newMaterial;
});
				  scene.add( gltf.scene );
					},
				);
