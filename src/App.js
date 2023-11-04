import { useState } from 'react';
import A from './components/A';
import B from './components/B';

function App() {
  const [color, setColor] = useState('red');

  return (
    <>
      <A color={color} />
      <B setColor={setColor} />
    </>
  );
}

export default App;

