import { useState, useEffect, useContext, createContext } from 'react'

import Header from './components/Header'
import Board from './components/Board'
import Keyboard from './components/keboard/Keyboard'

import { boardGuess } from './data/board'
import { words } from './data/words.json'

import './App.css'

const AppContext = createContext()

function App() {

  const [board, setBoard] = useState(boardGuess)
  const [todaysWord, setTodaysWord] = useState('MOURN')
  const [currWordGuess, setCurrWordGuess] = useState('')
  const [guessNumber, setGuessNumber] = useState(0)

  // useEffect(() => {
  //   let randomIdx = Math.floor(Math.random() * words.length)
  //   setTodaysWord(words[randomIdx])
  // }, [])

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard, todaysWord, currWordGuess, setCurrWordGuess, guessNumber, setGuessNumber }}>
        <Header />
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
export { AppContext }
