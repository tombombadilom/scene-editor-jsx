import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

import { SheetProvider, editable as e } from '@theatre/r3f';
import { getProject } from '@theatre/core';
import demoProjectState from './state.json';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
studio.initialize();
studio.extend(extension);

const demoSheet = getProject('Demo Project', { state: demoProjectState }).sheet('Demo Sheet')


const App = () =>  {
  useEffect(() => {
      demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 1] })
    }, [])
  return (
    <Canvas camera={{ position: [5, 5, -5] }}>
    <SheetProvider sheet={demoSheet}>
      <ambientLight />
      <e.pointLight uniqueName="Light" position={[10, 10, 10]} />
      <e.mesh uniqueName="Cube">
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </e.mesh>
    </SheetProvider> 
  </Canvas>
  );
}

export default App;
