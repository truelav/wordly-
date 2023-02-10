const GuessLetter = ({ letter, boardLetterId }) => {
    const id = ''
    return (
        <div className="GuessLetter" id={boardLetterId}>
            <p>
                {letter}
            </p>
        </div>
    )
}

export default GuessLetter
