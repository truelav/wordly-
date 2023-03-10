import { useContext } from "react"

import GuessWord from "./GuessWord"

import { AppContext } from '../App'

const Board = ({ boardId }) => {

    const { board, setBoard } = useContext(AppContext)

    return (
        <div className="Board">
            {board.map((word, idx) => {
                return <GuessWord key={idx} word={word} boardRowId={boardId[idx]} />
            })}
        </div>
    )
}

export default Board
