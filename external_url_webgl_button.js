// to use with nunustudio and similar webgl visual editors. If none used, add threejs link in the beginning

//Check intersected objects - checking all files grouped with the script
var intersects = scene.raycaster.intersectObjects(self.children);

//Link
for(var i = 0; i < intersects.length; i++)
{
	if(Mouse.buttonPressed(Mouse.LEFT))
	{
		window.open("https://https://github.com/petepolyakov/", "_blank");
	}
	
}
