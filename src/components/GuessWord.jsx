import GuessLetter from "./GuessLetter"

const GuessWord = ({ word }) => {

    return (
        <div className="GuessWord">
            {word.map((letter, idx) => {
                return <GuessLetter key={idx} letter={letter} />
            })}
        </div>
    )
}

export default GuessWord
