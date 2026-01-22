import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text, MeshDistortMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

// Agent data for the cosmic visualization
const agentNodes = [
  { id: 'user', name: 'User', position: [-6, 0, 0], color: '#FFFFFF' },
  { id: 'manager', name: 'Manager', position: [-3.5, 0, 0], color: '#6366F1' },
  { id: 'dreamer', name: 'Dreamer', position: [-1, 1.5, 0], color: '#8B5CF6' },
  { id: 'critic', name: 'Critic', position: [-1, -1.5, 0], color: '#F59E0B' },
  { id: 'pm', name: 'PM', position: [1.5, 1, 0], color: '#10B981' },
  { id: 'techlead', name: 'TechLead', position: [1.5, -1, 0], color: '#3B82F6' },
  { id: 'qa', name: 'QA', position: [4, 0, 0], color: '#EC4899' },
  { id: 'developer', name: 'Developer', position: [6.5, 0, 0], color: '#06B6D4' },
]

// Connection paths between agents
const connections = [
  { from: 0, to: 1 }, // User -> Manager
  { from: 1, to: 2 }, // Manager -> Dreamer
  { from: 2, to: 3 }, // Dreamer -> Critic
  { from: 3, to: 2 }, // Critic -> Dreamer (loop)
  { from: 2, to: 4 }, // Dreamer -> PM
  { from: 4, to: 5 }, // PM -> TechLead
  { from: 5, to: 6 }, // TechLead -> QA
  { from: 6, to: 7 }, // QA -> Developer
  { from: 7, to: 6 }, // Developer -> QA (loop)
  { from: 6, to: 1 }, // QA -> Manager (final)
]

interface GlowingOrbProps {
  position: [number, number, number]
  color: string
  name: string
  index: number
}

function GlowingOrb({ position, color, name, index }: GlowingOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        {/* Main orb */}
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.2 : 1}
        >
          <sphereGeometry args={[0.4, 32, 32]} />
          <MeshDistortMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 1.5 : 0.8}
            roughness={0.2}
            metalness={0.8}
            distort={0.2}
            speed={2}
          />
        </mesh>

        {/* Outer glow ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.02, 16, 100]} />
          <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>

        {/* Label */}
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </Float>
  )
}

interface EnergyBeamProps {
  start: THREE.Vector3
  end: THREE.Vector3
  color: string
  index: number
}

function EnergyBeam({ start, end, color, index }: EnergyBeamProps) {
  const particlesRef = useRef<THREE.Points>(null)

  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      start,
      new THREE.Vector3(
        (start.x + end.x) / 2,
        (start.y + end.y) / 2 + 0.3,
        (start.z + end.z) / 2 + 0.2
      ),
      end,
    ])
    return curve.getPoints(50)
  }, [start, end])

  const linePoints = useMemo(() => {
    return points.map(p => [p.x, p.y, p.z] as [number, number, number])
  }, [points])

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(15 * 3)
    for (let i = 0; i < 15; i++) {
      const t = i / 15
      const point = points[Math.floor(t * (points.length - 1))]
      positions[i * 3] = point.x
      positions[i * 3 + 1] = point.y
      positions[i * 3 + 2] = point.z
    }
    return positions
  }, [points])

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < 15; i++) {
        const t = ((i / 15) + state.clock.elapsedTime * 0.3 + index * 0.1) % 1
        const pointIndex = Math.floor(t * (points.length - 1))
        const point = points[pointIndex]
        positions[i * 3] = point.x
        positions[i * 3 + 1] = point.y
        positions[i * 3 + 2] = point.z
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Energy line */}
      <Line
        points={linePoints}
        color={color}
        lineWidth={1}
        transparent
        opacity={0.4}
      />

      {/* Flowing particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particlePositions}
            count={15}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color={color} size={0.08} transparent opacity={0.8} sizeAttenuation />
      </points>
    </group>
  )
}

function Starfield() {
  const particlesRef = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    const colors = new Float32Array(2000 * 3)

    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30

      // Blue to purple gradient
      const t = Math.random()
      colors[i * 3] = 0.3 + t * 0.4
      colors[i * 3 + 1] = 0.3 + t * 0.2
      colors[i * 3 + 2] = 0.8 + t * 0.2
    }

    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={2000} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={2000} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.2} />

      {/* Point lights for bloom effect simulation */}
      <pointLight position={[0, 5, 5]} intensity={1} color="#6366F1" />
      <pointLight position={[0, -5, -5]} intensity={0.5} color="#EC4899" />

      {/* Starfield background */}
      <Starfield />

      {/* Agent nodes */}
      {agentNodes.map((agent, index) => (
        <GlowingOrb
          key={agent.id}
          position={agent.position as [number, number, number]}
          color={agent.color}
          name={agent.name}
          index={index}
        />
      ))}

      {/* Energy beams */}
      {connections.map((conn, index) => (
        <EnergyBeam
          key={index}
          start={new THREE.Vector3(...agentNodes[conn.from].position)}
          end={new THREE.Vector3(...agentNodes[conn.to].position)}
          color={agentNodes[conn.to].color}
          index={index}
        />
      ))}

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export function CosmicPipeline3D() {
  return (
    <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
      {/* Gradient overlay for edges */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-dark-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/30 via-transparent to-dark-900/30" />
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #0a0a1a, #000010)' }}
      >
        <Scene />
      </Canvas>

      {/* Info overlay */}
      <div className="absolute bottom-4 left-4 right-4 text-center z-20">
        <p className="text-white/50 text-sm">
          Drag to rotate • Scroll to zoom • Watch energy flow through the agent network
        </p>
      </div>
    </div>
  )
}
