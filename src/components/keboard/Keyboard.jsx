import { useEffect, useState } from "react"

import KeyboardRow from './KeyboardRow'

import { keyboardLetters } from "../../data/board"

const Keyboard = () => {

    const [keyboardRows, setKeyboardRows] = useState([])
    useEffect(() => {
        setKeyboardRows(keyboardLetters)
    }, [])

    return (
        <div className="Keyboard">
            {keyboardRows.map((keysRow, idx) => {
                return <KeyboardRow key={idx} keysRow={keysRow} />
            })}
        </div>
    )
}

export default Keyboard
