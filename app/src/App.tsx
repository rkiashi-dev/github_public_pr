import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app-shell">
      <p className="eyebrow">React + TypeScript</p>
      <h1>Hello, world!</h1>
      <p className="lead">
        A small sample app built with React, TypeScript, and Vite for pull request
        experiments.
      </p>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Clicked {count} times
      </button>
    </main>
  )
}

export default App
