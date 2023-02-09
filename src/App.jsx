import { useState, useEffect, useContext } from 'react'

import Header from './components/Header'
import Board from './components/Board'

import { boardGuess } from './data/board'

import './App.css'

function App() {

  const [boardMatrix, setBoardMatrix] = useState(boardGuess)

  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  )
}

export default App
