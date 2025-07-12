// components/ParticleRing.js
"use client";
import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ParticleRing = () => {
  const points = useRef();
  const originalPositions = useRef([]);
  const [spread, setSpread] = useState(0); // spread factor when hovered

  const particles = useMemo(() => {
    const positions = [];
    const count = 1000;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 2;
      positions.push(x, y, z);
    }

    originalPositions.current = [...positions]; // Save for spreading
    return new Float32Array(positions);
  }, []);

  useFrame(({ mouse, clock }) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array;
      const time = clock.getElapsedTime();

      for (let i = 0; i < positions.length; i += 3) {
        const origX = originalPositions.current[i];
        const origY = originalPositions.current[i + 1];
        const origZ = originalPositions.current[i + 2];

        // Basic animation - slight movement using sin wave
        positions[i] = origX + Math.sin(time + i) * 0.02 * (1 + spread);
        positions[i + 1] = origY + Math.cos(time + i) * 0.02 * (1 + spread);
        positions[i + 2] = origZ + Math.sin(time + i * 0.3) * 0.02 * (1 + spread);
      }

      points.current.geometry.attributes.position.needsUpdate = true;

      points.current.rotation.y = mouse.x * Math.PI;
      points.current.rotation.x = mouse.y * Math.PI;
    }
  });

  return (
    <group
      onPointerOver={() => setSpread(2)}   // spread particles on hover
      onPointerOut={() => setSpread(0)}    // reset spread
    >
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="white" size={0.05} />
      </points>
    </group>
  );
};

export default function Circle() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <ambientLight />
      <ParticleRing />
    </Canvas>
  );
}
