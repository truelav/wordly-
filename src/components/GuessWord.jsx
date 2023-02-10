import GuessLetter from "./GuessLetter"

const GuessWord = ({ word, boardRowId }) => {

    //here we need to check the currentGuess and make sure they pressed enter with the todays word
    //and pass in id of gray, yellow or green

    return (
        <div className="GuessWord">
            {word.map((letter, idx) => {
                return <GuessLetter key={idx} letter={letter} boardLetterId={boardRowId[idx]} />
            })}
        </div>
    )
}

export default GuessWord
