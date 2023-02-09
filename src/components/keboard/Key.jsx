import { useState, useContext } from "react"

import { AppContext } from "../../App"

const Key = ({ keyLetter, id }) => {

    const { board, setBoard, todaysWord, currWordGuess, setCurrWordGuess, guessNumber, setGuessNumber } = useContext(AppContext)

    const handleEnter = () => {

    }

    const handleKeyClick = (val) => {
        console.log(currWordGuess)
        //first we need to check if (Enter) was clicked


        setCurrWordGuess(currWordGuess + keyLetter)
        updateBoard(board)

    }

    const updateBoard = (curBoard) => {
        const curLetterIdx = curBoard[guessNumber].findIndex(l => l === null)
        const newBoard = curBoard
        newBoard[guessNumber][curLetterIdx] = keyLetter
        console.log(newBoard, guessNumber, curLetterIdx)
        setBoard(newBoard)
    }

    return (
        <div className="Key" id={id} onClick={handleKeyClick}>
            <p>{keyLetter}</p>
        </div>
    )
}

export default Key
