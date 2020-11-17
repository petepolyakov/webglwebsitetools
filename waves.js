var normal, water, cube, standard;

function initialize()
{
cube = scene.getObjectByName("cubecamera"); // cube camera collects reflections 
	normal = program.getTextureByName("waves"); // normal maps 
	water = program.getMaterialByName("water2"); / material
	standard = program.getMaterialByName("skybox2"); 
	
}

function update()
{
	normal.offset.x += 0.0005;
	normal.offset.y += 0.00005;
}
