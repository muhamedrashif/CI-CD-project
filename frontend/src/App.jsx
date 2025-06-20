import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="header">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React Starter</h1>
      </header>

      <main className="main-content">
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Count: {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test hot module reload.
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>Click the logos above to learn more about Vite and React.</p>
      </footer>
    </div>
  )
}

export default App


