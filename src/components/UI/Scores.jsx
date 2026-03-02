export default function Scores( { currentScore, topScore }) {

    return (
        <div className="score-area">
            <h3
                className="current-score"> 
            Score: {currentScore}
            </h3>
            <h3 
                className="top-score">
                High score: {topScore}
            </h3>
        </div>
    )
}