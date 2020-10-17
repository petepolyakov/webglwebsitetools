
//if used pure threejs you would need to include it, if not and used nunustudio or etc that would be enough

var cameraAnimation;
var camera;

function initialize()
{
	cameraAnimation = true;
	camera = scene.getObjectByName("MainCameraOld2");
	console.log(camera);
	camera.mixer.pause();
}


function update(delta)
{
	
	//Check interseted objects - checking all files grouped with the script
	var intersects = scene.raycaster.intersectObjects(self.children);
	
	//Link
	for(var i = 0; i < intersects.length; i++)
	{
		if(Mouse.buttonPressed(Mouse.LEFT))
{
		cameraAnimation = !cameraAnimation;
		
		if(cameraAnimation)
		{
			camera.mixer.pause();
		}
		else
		{
			camera.mixer.play();
		}
	}
}
}
