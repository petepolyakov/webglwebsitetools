

var renderer, scene, camera;

init();
render();

function init() {

	// renderer
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setClearColor( 0x000000, 0.0 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// scene
	scene = new THREE.Scene();
	
	// camera
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 15, 20, 30 );
	scene.add( camera );

	// controls
	var controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render );
	controls.minDistance = 10;
	controls.maxDistance = 50;

	// ambient
	scene.add( new THREE.AmbientLight( 0xffffff, 0.1 ) );
	
	// light
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );

	// geometry
	var geometry = new THREE.BoxBufferGeometry( 10, 10, 10 );
	geometry.clearGroups();
	geometry.addGroup( 0, Infinity, 0 );
	geometry.addGroup( 0, Infinity, 1 );
	geometry.addGroup( 0, Infinity, 2 );
	geometry.addGroup( 0, Infinity, 3 );

	// textures
	var loader = new THREE.TextureLoader();
	var map = loader.load( 'https://threejs.org/examples/textures/decal/decal-diffuse.png', render );
	var normalMap = loader.load( 'https://threejs.org/examples/textures/decal/decal-normal.jpg', render );

	// materials
	var material0 = new THREE.MeshLambertMaterial( {
		color: 0xff2222,
		visible: true
	} );

	var material1 = new THREE.MeshPhongMaterial( {
		color: 0xffffff, 
		specular: 0x222222,
		shininess: 100,
		map: map,
		normalMap: normalMap,
		alphaTest: 0.5,
		visible: true
	} );

	var material2 = new THREE.MeshBasicMaterial( {
		wireframe: true,
		visible: true
	} );

	var material3 = new THREE.MeshNormalMaterial( {
		opacity: 0.5,
		transparent: true,
		visible: true
	} );

	var materials = [ material0, material1, material2, material3 ];

	// mesh
	mesh = new THREE.Mesh( geometry, materials );
	scene.add( mesh );

}

function render() {

	renderer.render( scene, camera );

}
