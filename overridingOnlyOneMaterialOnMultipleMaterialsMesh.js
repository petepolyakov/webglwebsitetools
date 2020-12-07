			// GIRL SITTING ON THE BALL
				loader.load(
					'/yourpath/your3dmodel.gltf',										
					function ( gltf ) {
					gltf.scene.position.set(0,0,0);
					gltf.scene.traverse( function( child ){
						if(child.material && (child.material.name == "skinmaterial"))
						child.castShadow = true; child.receiveShadow = true; } );
						gltf.scene.traverse( function( child ){ 
           // searching for the name of the material and replacing it with whatever you want
						if(child.material && (child.material.name == "eyematerial"))  child.material = new THREE.MeshLambertMaterial({emissive: 0xFFFFFF, emissiveIntensity: 50});  
					   } );
						scene.add( gltf.scene );
					},
				);
