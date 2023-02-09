import { useState } from "react"

import Key from "./Key"

const KeyboardRow = ({ keysRow }) => {
    console.log(keysRow)
    return (
        <div className="KeyboardRow">
            {keysRow.map((keyLetter, idx) => {
                return <Key key={idx} keyLetter={keyLetter} />
            })}
        </div>
    )
}

export default KeyboardRow
