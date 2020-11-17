function initialize()
{
	// TODO <INITIALIZATION CODE>
	loadVideos();
}

function loadVideos() 
{

// Color Correction Reel
	var materialNames = ["colormaterial"]; //, material name
	var videoNames = ["color.mp4"]; //,filename
	for (var index = 0; index < videoNames.length; index++) {
		var matName = materialNames[index];
		var vName = videoNames[index];
		var texture = new VideoTexture(new VideoStream(`/videos/${vName}`)); // folder
		var material = program.getMaterialByName(matName);
		material.emissiveMap = texture;
		material.emissive.setHex(0xFFFFFF);	
	}
	
// Visual Effects Reel
	var materialNames = ["vfxmaterial"]; //, material name
	var videoNames = ["vfx.mp4"]; //,filename
	for (var index = 0; index < videoNames.length; index++) {
		var matName = materialNames[index];
		var vName = videoNames[index];
		var texture = new VideoTexture(new VideoStream(`/videos/${vName}`)); // folder
		var material = program.getMaterialByName(matName);
		material.emissiveMap = texture;
		material.emissive.setHex(0xFFFFFF);	
	}	

// Director of Photography Reel
	var materialNames = ["dpmaterial"]; //, material name
	var videoNames = ["dp.mp4"]; //,filename
	for (var index = 0; index < videoNames.length; index++) {
		var matName = materialNames[index];
		var vName = videoNames[index];
		var texture = new VideoTexture(new VideoStream(`/videos/${vName}`)); // folder
		var material = program.getMaterialByName(matName);
		material.emissiveMap = texture;
		material.emissive.setHex(0xFFFFFF);	
	}

	
}

function update(delta)
{
	// TODO <UPDATE CODE>
}
