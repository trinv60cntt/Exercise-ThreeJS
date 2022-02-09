import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box() {
  const meshRef = React.useRef();

  useFrame((state, delta) => {
    delta += 0.001
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta
  })

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <boxGeometry width={1} height={1} depth={1} />
      <meshBasicMaterial color={0x44aa88} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas camera={{ fov: 75, aspect: 2, near: 1, far: 5 }}>
      <Box />
      <directionalLight color={0xFFFFFF} intensity={1} position={-1, 2, 4} />
    </Canvas>
  );
}

export default App;
