
//

var object;

function initialize()
{
	
	object = scene.getObjectByName("CamRover");
	
//	let attractor=new THREE.Object3D(); attractor.name="attractor"; scene.add(attractor);
}

function update()
{
//object.position.x += Mouse.delta.x * 0.0003;
//object.position.y += Mouse.delta.y * 0.0003;
//object.position.z += Mouse.delta.y * 0.001;

	md=new Vector3(Mouse.delta.x * 0.0003, Mouse.delta.y * 0.0003, Mouse.delta.y * 0.001);
	object.position.add(md);
//	minPosLimit=new THREE.Vector3( x0, y0, z0);
//	object.position.clamp(minPosLimit, maxPosLimit);

	
}

