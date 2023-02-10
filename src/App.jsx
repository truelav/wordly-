import { useState, useEffect, useContext, createContext } from 'react'

import Header from './components/Header'
import Board from './components/Board'
import Keyboard from './components/keboard/Keyboard'

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


  const handleEnter = () => {

    if (currWordGuess.length >= 5) {

      // checkGameEnd()
      checkLetters()
      setGuessNumber(guessNumber + 1)
      setCurrWordGuess('')

    } else {
      return
    }
  }



  const checkLetters = () => {
    //   qwert  ||  mourn
    const word = todaysWord.split('')
    const guessWord = currWordGuess.split('')

    for (let i = 0; i < guessWord.length; i++) {

      const letter = guessWord[i]
      if (word.includes(letter)) {
        if (word[i] === guessWord[i]) {

          console.log('We have a green Match')
          //we have found a green match (modify the background then change it to exclamation mark both letters) 
          const newBoardId = [...boardId]
          newBoardId[guessNumber][i] = 'greenCell'
          setBoardId(newBoardId)

        } else {

          console.log('We have a yellow Match')

        }
      } else {

      }
    }
  }

  const checkGameEnd = () => {
    return todaysWord.toLocaleLowerCase() === currWordGuess.toLocaleLowerCase()
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
        <Header />
        <Board boardId={boardId} />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
export { AppContext }
