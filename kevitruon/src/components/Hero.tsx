import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Three.js code
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      canvasRef.current.appendChild(renderer.domElement);

      const loader = new OBJLoader();
      let switchModel: THREE.Group;

      loader.load(
        '/models/Low_poly_switch.obj',
        (object) => {
          switchModel = object;
          scene.add(switchModel);

          // Position and scale the model as desired
          switchModel.position.set(0, 0,0);
          switchModel.scale.set(5,5,1);

          // Show the text overlay after the model is loaded
          if (textRef.current) {
            textRef.current.style.opacity = '1';
          }
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
          console.error('An error occurred while loading the model', error);
        }
      );

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();

      // Position the text element based on the Switch model's screen position
      const positionTextOverlay = () => {
        if (textRef.current && switchModel) {
          const switchScreenBounds = getScreenBounds(switchModel);

          textRef.current.style.top = `${switchScreenBounds.top}px`;
          textRef.current.style.left = `${switchScreenBounds.left}px`;
          textRef.current.style.width = `${switchScreenBounds.width}px`;
          textRef.current.style.height = `${switchScreenBounds.height}px`;
        }
      };

      const getScreenBounds = (model: THREE.Group) => {
        // Calculate the bounding box of the Switch model's screen area
        // and return an object with top, left, width, and height properties
        // Adjust the calculations based on your specific model's geometry
        const boundingBox = new THREE.Box3().setFromObject(model);
        const size = boundingBox.getSize(new THREE.Vector3());
        const center = boundingBox.getCenter(new THREE.Vector3());

        const screenWidth = size.x * 0.6; // Adjust the factor based on your model's screen size
        const screenHeight = size.y * 0.4; // Adjust the factor based on your model's screen size
        const screenLeft = center.x - screenWidth / 2;
        const screenTop = center.y - screenHeight / 2;

        const screenBounds = {
          top: (screenTop + 1) * window.innerHeight / 2,
          left: (screenLeft + 1) * window.innerWidth / 2,
          width: screenWidth * window.innerWidth,
          height: screenHeight * window.innerHeight,
        };

        return screenBounds;
      };

      // Update the text overlay position when the window is resized
      window.addEventListener('resize', positionTextOverlay);

      // Clean up Three.js resources when the component unmounts
      return () => {
        window.removeEventListener('resize', positionTextOverlay);
        renderer.dispose();
      };
    }
  }, []);

  return (
    <div>
      <div ref={canvasRef} style={{ position: 'relative' }}></div>
      <div
        ref={textRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          color: '#ffffff',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '5px',
          opacity: 0,
          transition: 'opacity 0.5s',
        }}
      >
        Hi there, I'm Kevin Truong - a passionate software engineer with a love for building innovative digital
        experiences. Welcome to my online portfolio, showcasing my skills and some of the projects I've worked on.
      </div>
    </div>
  );
};

export default Hero;
