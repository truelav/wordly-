const WinnerLooser = ({ isWinner, isLooser, setIsWinner, setIsLooser }) => {

    if (isWinner) {

        return (
            <div className="WinnerLooser">
                <h2>Congrats You're a Winner</h2>
            </div>
        )

    } else if (isLooser) {
        return (
            <div className="WinnerLooser">
                <h2>Next Time Maybe...</h2>
            </div>
        )
    } else {
        return (
            <div className="WinnerLooser">

            </div>
        )
    }
}

export default WinnerLooser
