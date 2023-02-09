import { useState } from "react"

import Key from "./Key"

const KeyboardRow = ({ keysRow, idx }) => {

    if (idx === 2) {
        return (
            <div className="KeyboardRow">
                <Key id={'bigKey'} keyLetter={'backsp'} />
                {keysRow.map((keyLetter, i) => {
                    return <Key key={i} keyLetter={keyLetter} />
                })}
                <Key id={'bigKey'} keyLetter={"enter"} />
            </div>
        )
    }

    return (
        <div className="KeyboardRow">

            {keysRow.map((keyLetter, i) => {
                return <Key key={i} keyLetter={keyLetter} />
            })}
        </div>
    )
}

export default KeyboardRow
