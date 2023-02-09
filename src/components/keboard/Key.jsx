import { useState, useContext, useEffect } from "react"

import { AppContext } from "../../App"

const Key = ({ keyLetter, id }) => {

    const { board, setBoard, todaysWord, currWordGuess, setCurrWordGuess, guessNumber, setGuessNumber } = useContext(AppContext)

    const handleEnter = () => {

    }

    // useEffect(() => {
    // })

    const handleKeyClick = (val) => {

        if (keyLetter === 'enter') {
            console.log('ENTER was clicked')
            if (currWordGuess.length >= 5) {
                // check for the matching letters or word 
                // and then check for guessNumber
                //update colors and guess Number

                setGuessNumber(guessNumber + 1)
                setCurrWordGuess('')

                console.log(currWordGuess, guessNumber)
            } else {
                return
            }
        }

        if (currWordGuess.length === 5) return

        setCurrWordGuess(currWordGuess + keyLetter)
        updateBoard(board)

    }

    const updateBoard = (curBoard) => {
        const curLetterIdx = curBoard[guessNumber].findIndex(l => l === null)
        const newBoard = curBoard
        newBoard[guessNumber][curLetterIdx] = keyLetter
        setBoard(newBoard)
    }

    const checkWordAndLetters = () => {

    }

    return (
        <div className="Key" id={id} onClick={handleKeyClick}>
            <p>{keyLetter}</p>
        </div>
    )
}

export default Key
