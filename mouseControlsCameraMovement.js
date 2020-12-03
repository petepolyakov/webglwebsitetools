			var cube;
var cameraCenter = new THREE.Vector3();
var cameraHorzLimit = 0.1;
var cameraVertLimit = 0.2;
var mouse = new THREE.Vector2();


			init();
			animate();			
			render();
    
      
      camera.lookAt (new THREE.Vector3(0,3,0));
	    	cameraCenter.x = camera.position.x;
		    cameraCenter.z = camera.position.z;
			
			//set up mouse stuff
			document.addEventListener('mousemove', onDocumentMouseMove, false);


				function animate()
				{   
					updateCamera();
					requestAnimationFrame ( animate );  
					renderer.render (scene, camera);
				}

				function updateCamera() {
					//offset the camera x/y based on the mouse's position in the window
					camera.position.x = cameraCenter.x + (cameraHorzLimit * mouse.x);
					camera.position.z = cameraCenter.z + (cameraVertLimit * mouse.y);
				}


				function onDocumentMouseMove(event) {
					event.preventDefault();
					mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
					mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				render();
			}
