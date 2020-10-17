
//if used pure threejs you would need to include it, if not and used nunustudio or etc that would be enough

var cameraAnimation;
var camera;

//selecting the camera
function initialize()
{
	cameraAnimation = true;
	camera = scene.getObjectByName("MainCameraOld2");
	console.log(camera); //if you want to monitor the log
	camera.mixer.pause();
}

//button "wating" to be clicked so it can start the animation

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
