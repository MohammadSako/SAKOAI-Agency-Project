'use client'
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const points = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const count = 2000;
    const positions = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 1.5 + Math.random();
      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame(({ mouse }) => {
    if (!points.current) return;
    targetRotation.current.y += (mouse.x * Math.PI * 0.5 - targetRotation.current.y) * 0.05;
    targetRotation.current.x += (-mouse.y * Math.PI * 0.5 - targetRotation.current.x) * 0.05;
    points.current.rotation.y = targetRotation.current.y;
    points.current.rotation.x = targetRotation.current.x;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="black"
        size={0.02}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
};

export default function Sphare() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ background: "transparent", height: "100vh", width: "100vw" }}
    >
      <ambientLight />
      <Particles />
    </Canvas>
  );
}
