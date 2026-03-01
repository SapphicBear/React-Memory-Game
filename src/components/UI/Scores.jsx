import TopScore from "./TopScore";
import CurrentScore from "./CurrentScore";

export default function Scores( { currentScore, topScore }) {

    return (
        <div className="score-area">
            <CurrentScore 
                currentScore={currentScore}
            />
            <TopScore 
                topScore={topScore}
            />
        </div>
    )
}