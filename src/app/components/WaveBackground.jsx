"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Wave() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.position.z = Math.sin(clock.getElapsedTime()) * 0.2; // Wave motion
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[12, 12, 100, 100]} /> {/* High subdivision for smoother waves */}
      <MeshWobbleMaterial
        attach="material"
        factor={0.8} // Increase wobble effect
        speed={1.2} // Adjust speed
        color="#00b894" // Background color
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

export default function WaveBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Wave />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
