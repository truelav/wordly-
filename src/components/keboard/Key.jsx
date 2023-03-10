import { useState, useContext, useEffect } from "react"

import { AppContext } from "../../App"

const Key = ({ keyLetter, id }) => {

    const { board, setBoard, currWordGuess, setCurrWordGuess, handleEnter, guessNumber } = useContext(AppContext)

    const handleKeyClick = () => {
        if (keyLetter === 'enter') {
            handleEnter()
            return
        }

        if (keyLetter === 'del') {
            handleDel()
            return
        }

        if (currWordGuess.length === 5) return

        setCurrWordGuess(currWordGuess + keyLetter)
        updateBoard(board)

    }

    const updateBoard = (curBoard) => {
        const curLetterIdx = curBoard[guessNumber].findIndex(l => l === null)
        const newBoard = [...curBoard]
        newBoard[guessNumber][curLetterIdx] = keyLetter
        setBoard(newBoard)
    }

    const handleDel = () => {
        const newWordGuess = currWordGuess.slice(0, -1)
        setCurrWordGuess(newWordGuess)
        const newBoard = [...board]
        newBoard[currWordGuess] = newWordGuess.split('')
        setBoard(newBoard)
    }

    return (
        <div className="Key" id={id} onClick={handleKeyClick}>
            <p>{keyLetter}</p>
        </div>
    )
}

export default Key
