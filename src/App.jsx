import { useState, useEffect, useContext, createContext } from 'react'
import Modal from "react-modal"
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Board from './components/Board'
import Keyboard from './components/keboard/Keyboard'
import Footer from './components/Footer'
import WinnerLooser from './components/WinnerLooser'

import { boardGuess, boardIds } from './data/board'
import { words } from './data/words.json'

import './App.css'

const AppContext = createContext()


function App() {

  const [board, setBoard] = useState(boardGuess)
  const [boardId, setBoardId] = useState(boardIds)
  const [todaysWord, setTodaysWord] = useState('MOURN'.toLocaleLowerCase())
  const [currWordGuess, setCurrWordGuess] = useState('')
  const [guessNumber, setGuessNumber] = useState(0)
  const [isGuessSubmited, setIsGuessSubmited] = useState(false)
  const [isWinner, setIsWinner] = useState(false)
  const [isLooser, setIsLooser] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)


  const handleEnter = () => {
    if (currWordGuess.length >= 5 && guessNumber <= 4) {
      checkLetters()
      setGuessNumber(guessNumber + 1)
      setCurrWordGuess('')
      checkGameEnd()
    } else {
      return
    }
  }

  const checkLetters = () => {
    //   qwert  ||  mourn
    const word = todaysWord.split('')
    const guessWord = currWordGuess.split('')
    // a way to improve performance is to create a copy
    //of a matrix here and modify and change state at the end
    const newBoardId = [...boardId]

    for (let i = 0; i < guessWord.length; i++) {

      const letter = guessWord[i]
      if (word.includes(letter)) {
        if (word[i] === guessWord[i]) {
          console.log('We have a green Match')
          newBoardId[guessNumber][i] = 'greenCell'

        } else {
          console.log('We have a yellow Match')
          newBoardId[guessNumber][i] = 'yellowCell'
        }
      } else {
        newBoardId[guessNumber][i] = 'grayCell'
      }
    }

    setBoardId(newBoardId)
  }

  const checkGameEnd = () => {
    if (todaysWord.toLocaleLowerCase() === currWordGuess.toLocaleLowerCase()) {
      setIsWinner(true)
      return
    } else if (currWordGuess.length === 5 && guessNumber === 4) {
      setIsLooser(true)
      return
    } else {
      return
    }
  }

  // useEffect(() => {
  //   let randomIdx = Math.floor(Math.random() * words.length)
  //   setTodaysWord(words[randomIdx])
  // }, [])

  return (
    <div className="App">
      <AppContext.Provider value={{
        board, setBoard, todaysWord, checkGameEnd, checkLetters,
        currWordGuess, setCurrWordGuess, guessNumber, setGuessNumber,
        isGuessSubmited, setIsGuessSubmited, handleEnter
      }}>
        {/* <Modal isOpen={modalIsOpen}> */}
        <Header />
        <WinnerLooser
          isWinner={isWinner}
          isLooser={isLooser}
          setIsWinner={setIsWinner}
          setIsLooser={setIsLooser}
        />
        <Board boardId={boardId} />
        <Keyboard />
        <Footer />
        {/* </Modal> */}
      </AppContext.Provider>
    </div>
  )
}

export default App
export { AppContext }
