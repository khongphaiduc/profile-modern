import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface TechNode {
  name: string;
  category: string;
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  glowColor: string;
  isCenter?: boolean;
  desc: string;
}

const NODES_DATA: TechNode[] = [
  {
    name: '.NET 8',
    category: 'Core Runtime',
    position: [0, 0, 0],
    size: [2.2, 2.2, 2.2],
    color: '#512BD4',
    glowColor: '#A9B4F7',
    isCenter: true,
    desc: 'High-performance cross-platform unified ecosystem for scalable cloud APIs and worker services.',
  },
  {
    name: 'C# 12',
    category: 'Primary Language',
    position: [-3.8, 1.8, 0.5],
    size: [1.3, 1.3, 1.3],
    color: '#239120',
    glowColor: '#60E45E',
    desc: 'Strictly-typed modern OOP language featuring LINQ, async-await concurrency, and pattern matching.',
  },
  {
    name: 'ASP.NET Core',
    category: 'Web Framework',
    position: [3.6, 2.0, -0.6],
    size: [1.4, 1.4, 1.4],
    color: '#0865A6',
    glowColor: '#53B7F5',
    desc: 'Lightweight, modular enterprise web framework with built-in dependency injection and pipeline filters.',
  },
  {
    name: 'RabbitMQ',
    category: 'Message Broker',
    position: [-4.2, -1.6, 1.2],
    size: [1.3, 1.3, 1.3],
    color: '#FF6600',
    glowColor: '#F6A86C',
    desc: 'Robust AMQP event broker enabling asynchronous microservice choreography and dead-letter fault tolerance.',
  },
  {
    name: 'Redis',
    category: 'In-Memory Cache',
    position: [4.0, -1.8, 0.8],
    size: [1.3, 1.3, 1.3],
    color: '#DC382D',
    glowColor: '#F87171',
    desc: 'Sub-millisecond latency distributed memory store for session state, catalog caching, and rate limiting.',
  },
  {
    name: 'PostgreSQL',
    category: 'Relational DB',
    position: [-2.2, 3.4, -1.5],
    size: [1.2, 1.2, 1.2],
    color: '#336791',
    glowColor: '#818CF8',
    desc: 'Advanced open-source relational database handling ACID compliance and JSONB documents.',
  },
  {
    name: 'SQL Server',
    category: 'Enterprise DB',
    position: [2.4, 3.5, 1.0],
    size: [1.2, 1.2, 1.2],
    color: '#CC292B',
    glowColor: '#FB7185',
    desc: 'Mission-critical database engine powering complex relational schemas, stored procedures, and analytics.',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    position: [0.2, -3.4, 1.6],
    size: [1.4, 1.4, 1.4],
    color: '#2496ED',
    glowColor: '#38BDF8',
    desc: 'Multi-stage container builds ensuring reproducible execution environments across local and staging.',
  },
  {
    name: 'MassTransit',
    category: 'Service Bus',
    position: [-2.4, -3.2, -1.0],
    size: [1.2, 1.2, 1.2],
    color: '#1E40AF',
    glowColor: '#93C5FD',
    desc: 'Distributed application framework over RabbitMQ with Saga state machine transaction handling.',
  },
  {
    name: 'Jenkins / CI',
    category: 'Automation',
    position: [2.6, -3.2, -1.4],
    size: [1.2, 1.2, 1.2],
    color: '#D33833',
    glowColor: '#FCA5A5',
    desc: 'Declarative pipelines automating test suites, Docker image compilation, and server deployments.',
  },
  {
    name: 'Cloudflare R2',
    category: 'Storage',
    position: [-5.0, 0.2, -1.8],
    size: [1.1, 1.1, 1.1],
    color: '#F38020',
    glowColor: '#FDBA74',
    desc: 'S3-compatible global distributed object storage with zero egress fees for media assets.',
  },
  {
    name: 'gRPC & SignalR',
    category: 'Protocols',
    position: [5.2, 0.1, -1.2],
    size: [1.1, 1.1, 1.1],
    color: '#2B8296',
    glowColor: '#67E8F9',
    desc: 'High-speed HTTP/2 binary serialization and bi-directional real-time websockets.',
  },
];

interface TechStack3DProps {
  onSelectNode?: (node: TechNode | null) => void;
}

export const TechStack3D: React.FC<TechStack3DProps> = ({ onSelectNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<TechNode | null>(NODES_DATA[0]);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#0A0B0F', 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Atmospheric Lights
    const ambientLight = new THREE.AmbientLight('#A9B4F7', 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight('#F6A86C', 2.4);
    mainLight.position.set(10, 15, 10);
    scene.add(mainLight);

    const blueRimLight = new THREE.DirectionalLight('#512BD4', 3.0);
    blueRimLight.position.set(-10, -10, -8);
    scene.add(blueRimLight);

    const centerPointLight = new THREE.PointLight('#A9B4F7', 3.5, 8);
    centerPointLight.position.set(0, 0, 0);
    scene.add(centerPointLight);

    // Particle Dust Field
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#A9B4F7');
    const color2 = new THREE.Color('#F6A86C');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const mixed = Math.random() > 0.5 ? color1 : color2;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    // Node Meshes
    const nodeMeshes: {
      mesh: THREE.Mesh;
      wireframe: THREE.LineSegments;
      data: TechNode;
      initialPos: THREE.Vector3;
      phase: number;
    }[] = [];

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    NODES_DATA.forEach((node, idx) => {
      const [w, h, d] = node.size;
      const geom = new THREE.BoxGeometry(w, h, d);
      const wireGeom = new THREE.EdgesGeometry(geom);

      // Translucent brutalist glass cube material
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(node.color),
        roughness: 0.15,
        transmission: 0.75,
        thickness: 1.2,
        transparent: true,
        opacity: node.isCenter ? 0.95 : 0.65,
        emissive: new THREE.Color(node.glowColor),
        emissiveIntensity: node.isCenter ? 0.35 : 0.12,
        metalness: 0.1,
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...node.position);
      (mesh as any).userData = node;

      // Architectural outline
      const wireMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(node.glowColor),
        transparent: true,
        opacity: node.isCenter ? 0.85 : 0.45,
      });
      const wireframe = new THREE.LineSegments(wireGeom, wireMat);
      mesh.add(wireframe);

      rootGroup.add(mesh);

      nodeMeshes.push({
        mesh,
        wireframe,
        data: node,
        initialPos: new THREE.Vector3(...node.position),
        phase: idx * 0.45,
      });
    });

    // Connecting Architectural Vector Lines from center to satellites
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color('#A9B4F7'),
      transparent: true,
      opacity: 0.15,
    });

    const linesGroup = new THREE.Group();
    rootGroup.add(linesGroup);

    nodeMeshes.forEach((item) => {
      if (item.data.isCenter) return;
      const lineGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        item.initialPos,
      ]);
      const line = new THREE.Line(lineGeom, lineMaterial);
      linesGroup.add(line);
    });

    // Mouse Interaction
    const mouse = new THREE.Vector2(-1000, -1000);
    const targetCameraRotation = new THREE.Vector2(0, 0);
    const raycaster = new THREE.Raycaster();
    let hoveredMesh: THREE.Mesh | null = null;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.x = x;
      mouse.y = y;

      targetCameraRotation.x = y * 0.25;
      targetCameraRotation.y = x * 0.35;
    };

    const onClick = () => {
      if (hoveredMesh) {
        const data = (hoveredMesh as any).userData as TechNode;
        setActiveNode(data);
        if (onSelectNode) onSelectNode(data);
      }
    };

    container.addEventListener('mousemove', onPointerMove);
    container.addEventListener('click', onClick);

    // Window Resize Handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera tilt damping
      rootGroup.rotation.y += (targetCameraRotation.y - rootGroup.rotation.y) * 0.04;
      rootGroup.rotation.x += (targetCameraRotation.x - rootGroup.rotation.x) * 0.04;

      // Base gentle global rotation
      rootGroup.rotation.y += 0.0018;

      // Floating sine wave animation for cubes
      nodeMeshes.forEach((item) => {
        const floatOffset = Math.sin(elapsedTime * 1.2 + item.phase) * 0.18;
        item.mesh.position.y = item.initialPos.y + floatOffset;
        item.mesh.rotation.x = Math.sin(elapsedTime * 0.5 + item.phase) * 0.15;
        item.mesh.rotation.z = Math.cos(elapsedTime * 0.4 + item.phase) * 0.15;
      });

      // Slowly rotate particle field
      particleField.rotation.y = elapsedTime * 0.02;

      // Raycasting for hover highlights
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        nodeMeshes.map((m) => m.mesh)
      );

      if (intersects.length > 0) {
        const topIntersect = intersects[0].object as THREE.Mesh;
        if (hoveredMesh !== topIntersect) {
          // Reset previous
          if (hoveredMesh) {
            const prevItem = nodeMeshes.find((m) => m.mesh === hoveredMesh);
            if (prevItem) {
              (hoveredMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity =
                prevItem.data.isCenter ? 0.35 : 0.12;
              prevItem.wireframe.material.opacity = prevItem.data.isCenter ? 0.85 : 0.45;
              hoveredMesh.scale.set(1, 1, 1);
            }
          }

          hoveredMesh = topIntersect;
          const currentItem = nodeMeshes.find((m) => m.mesh === hoveredMesh);
          if (currentItem) {
            (hoveredMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity = 0.85;
            currentItem.wireframe.material.opacity = 1.0;
            hoveredMesh.scale.set(1.15, 1.15, 1.15);
            setActiveNode(currentItem.data);
            if (onSelectNode) onSelectNode(currentItem.data);
          }
        }
      } else {
        if (hoveredMesh) {
          const prevItem = nodeMeshes.find((m) => m.mesh === hoveredMesh);
          if (prevItem) {
            (hoveredMesh.material as THREE.MeshPhysicalMaterial).emissiveIntensity =
              prevItem.data.isCenter ? 0.35 : 0.12;
            prevItem.wireframe.material.opacity = prevItem.data.isCenter ? 0.85 : 0.45;
            hoveredMesh.scale.set(1, 1, 1);
          }
          hoveredMesh = null;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('click', onClick);

      // Clean up geometries and materials
      nodeMeshes.forEach((item) => {
        item.mesh.geometry.dispose();
        (item.mesh.material as THREE.Material).dispose();
        item.wireframe.geometry.dispose();
        (item.wireframe.material as THREE.Material).dispose();
      });

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onSelectNode]);

  if (!isSupported) {
    return (
      <div className="relative w-full h-[540px] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-[#15161C]/80 p-8">
        <img
          src="/images/tech-stack.png"
          alt="Technical Ecosystem Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center max-w-lg bg-[#0A0B0F]/90 backdrop-blur-md p-6 rounded-xl border border-white/10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#F6A86C] font-mono-tech mb-2 block">
            Ecosystem Matrix
          </span>
          <h4 className="text-2xl font-serif-editorial text-[#F3EFE8] mb-2">
            .NET Distributed Core
          </h4>
          <p className="text-sm text-[#F3EFE8]/70 leading-relaxed">
            Scalable backend architecture centered around .NET 8, RabbitMQ event streaming, Redis caching, and Docker pipelines.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[580px] lg:h-[680px] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0B0F] shadow-2xl group">
      {/* 3D Canvas Mount Point */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Atmospheric corner vignettes and radial gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#0A0B0F_95%)]" />
      <div className="absolute top-6 left-6 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#A9B4F7]">
          <span className="w-2 h-2 rounded-full bg-[#A9B4F7] animate-pulse" />
          Interactive 3D Ecosystem
        </span>
      </div>

      <div className="absolute top-6 right-6 pointer-events-none hidden sm:block text-right">
        <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#F3EFE8]/40 block">
          Hover node to inspect &bull; Drag to tilt
        </span>
      </div>

      {/* Active Node Detail Card Overlay */}
      {activeNode && (
        <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md pointer-events-auto bg-[#15161C]/90 backdrop-blur-xl border border-[#F6A86C]/30 rounded-2xl p-5 shadow-2xl transition-all duration-300">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <span className="text-[10px] uppercase font-mono-tech tracking-[0.25em] text-[#F6A86C] block mb-1">
                {activeNode.category}
              </span>
              <h4 className="text-xl sm:text-2xl font-serif-editorial font-bold text-[#F3EFE8] flex items-center gap-2">
                {activeNode.name}
                {activeNode.isCenter && (
                  <span className="text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded bg-[#F6A86C]/20 text-[#F6A86C] font-mono-tech">
                    Central Core
                  </span>
                )}
              </h4>
            </div>
            <div
              className="w-4 h-4 rounded-full border border-white/20 shrink-0 mt-1 shadow-lg"
              style={{ backgroundColor: activeNode.color, boxShadow: `0 0 12px ${activeNode.glowColor}` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-[#F3EFE8]/80 leading-relaxed font-sans-ui">
            {activeNode.desc}
          </p>
        </div>
      )}
    </div>
  );
};
