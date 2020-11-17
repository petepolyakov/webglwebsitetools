var cameraAnimation;
var camera;

function initialize()
{
	cameraAnimation = true;
	camera = scene.getObjectByName("MainCamera");
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
		if(Mouse.buttonJustPressed(Mouse.LEFT))
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
