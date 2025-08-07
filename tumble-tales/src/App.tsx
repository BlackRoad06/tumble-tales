import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

/*Import components here*/
import Header from './components/Header/Header';

import Body from './components/Body/Body';

function App() {
  const [count, setCount] = useState(0)

return (
  <div>
    <Header /> {/* Set Header to take up full width */}
    <Body /> {/* Set Body to take up full width */}

    <div className="p-2">

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-red-500">Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <p>Hellop</p>
      <h1 className="text-red-500">Vite + React</h1>
      <p>heleelel</p>
      <button className="bg-red-500 hover:bg-red-400 active:bg-red-700 text-white px-6 py-2 rounded-md font-sans tracking-wider text-base transition duration-100">
        Login
      </button>

    </div>
    
  </div>
);

}

export default App
