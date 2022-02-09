import React from 'react'
import { Canvas, useFrame, render, events } from '@react-three/fiber'

window.addEventListener('resize', () =>
  render(<mesh />, document.querySelector('canvas'), {
    events,
    size: { width: window.innerWidth, height: window.innerHeight },
  }),
)

window.dispatchEvent(new Event('resize'))

function Box() {
  const meshRef = React.useRef();
  // move object
  useFrame((state, delta) => {
    delta += 0.001
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta
  })

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      {/* Geometry */}
      <boxGeometry width={1} height={1} depth={1} /> 
      {/* Material */}
      <meshPhongMaterial color={0x44aa88} />
    </mesh>
  )
}

function App() {
  return (
    // init Canvas - camera
    <Canvas camera={{ fov: 75, aspect: 2, near: 1, far: 5000 }}>
      <Box />
      {/* add light */}
      <directionalLight color={0xFFFFFF} intensity={1} position={[-1, 2, 4]} />
    </Canvas>
  );
}

export default App;
