"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Spheres3DProps {
  className?: string;
  variant?: "hero" | "philosophy" | "steps";
}

export default function Spheres3D({
  className = "w-full h-[500px]",
  variant = "philosophy",
}: Spheres3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(4, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe8c5c1, 2.0); // Blush warm rim light
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xd08c81, 3.0, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // 3. Shimmering PDRN Glass/Metaball Spheres Group
    const group = new THREE.Group();
    scene.add(group);

    // Create custom luxury glass material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#fbf7f6"),
      emissive: new THREE.Color("#d08c81"),
      emissiveIntensity: 0.12,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.9,
      ior: 1.45,
      thickness: 1.2,
      specularIntensity: 1.0,
      specularColor: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.88,
    });

    const innerCoreMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#e8c5c1"),
      roughness: 0.3,
      metalness: 0.2,
      transparent: true,
      opacity: 0.45,
    });

    // Main Central Bio-Sphere
    const mainGeometry = new THREE.SphereGeometry(1.4, 64, 64);
    const mainSphere = new THREE.Mesh(mainGeometry, glassMaterial);
    group.add(mainSphere);

    // Inner Glowing Core
    const coreGeometry = new THREE.SphereGeometry(0.85, 32, 32);
    const coreSphere = new THREE.Mesh(coreGeometry, innerCoreMaterial);
    group.add(coreSphere);

    // Floating Cellular Satellite Bubbles
    const satelliteCount = 8;
    const satellites: {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      speed: number;
      offset: number;
      scale: number;
    }[] = [];

    const satGeom = new THREE.SphereGeometry(1, 32, 32);
    const satPositions = [
      new THREE.Vector3(-2.2, 1.2, 0.4),
      new THREE.Vector3(2.3, -0.9, 0.6),
      new THREE.Vector3(-1.4, -1.8, -0.5),
      new THREE.Vector3(1.8, 1.7, -0.6),
      new THREE.Vector3(0.5, 2.3, 0.2),
      new THREE.Vector3(-2.5, -0.4, 0.8),
      new THREE.Vector3(2.6, 0.8, -0.2),
      new THREE.Vector3(-0.8, 2.1, -0.4),
    ];

    satPositions.forEach((pos, i) => {
      const scale = 0.25 + (i % 4) * 0.12;
      const satMesh = new THREE.Mesh(satGeom, glassMaterial);
      satMesh.position.copy(pos);
      satMesh.scale.setScalar(scale);
      group.add(satMesh);

      satellites.push({
        mesh: satMesh,
        basePos: pos.clone(),
        speed: 0.8 + (i % 3) * 0.4,
        offset: i * 0.75,
        scale,
      });
    });

    // 4. Mouse Interactive State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.6;
      targetY = y * 0.6;
    };

    window.addEventListener("pointermove", onPointerMove);

    // 5. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group rotation & tilt
      group.rotation.y = elapsedTime * 0.15 + mouseX * 0.8;
      group.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 + mouseY * 0.5;

      // Core pulsing
      const corePulse = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
      coreSphere.scale.setScalar(corePulse);

      // Satellite orbital micro-motion
      satellites.forEach((sat) => {
        const t = elapsedTime * sat.speed + sat.offset;
        sat.mesh.position.x = sat.basePos.x + Math.sin(t) * 0.25;
        sat.mesh.position.y = sat.basePos.y + Math.cos(t * 0.8) * 0.25;
        sat.mesh.position.z = sat.basePos.z + Math.sin(t * 1.2) * 0.2;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      renderer.dispose();
      mainGeometry.dispose();
      coreGeometry.dispose();
      satGeom.dispose();
      glassMaterial.dispose();
      innerCoreMaterial.dispose();
    };
  }, [variant]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
