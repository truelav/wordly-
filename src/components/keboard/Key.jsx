import { useState, useContext, useEffect } from "react"

import { AppContext } from "../../App"

const Key = ({ keyLetter, id }) => {

    const { board, setBoard, todaysWord, checkGameEnd, checkLetters, currWordGuess, setCurrWordGuess, guessNumber, setGuessNumber, isGuessSubmited, setIsGuessSubmited } = useContext(AppContext)

    const handleEnter = () => {

    }

    // useEffect(() => {
    // })

    const handleKeyClick = (val) => {

        if (keyLetter === 'enter') {

            if (currWordGuess.length >= 5) {

                //
                // checkGameEnd()
                checkLetters()
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





    return (
        <div className="Key" id={id} onClick={handleKeyClick}>
            <p>{keyLetter}</p>
        </div>
    )
}

export default Key
