import TopScore from "./TopScore";
import CurrentScore from "./CurrentScore";

export default function Scores( { currentScore, topScore }) {

    return (
        <>
            <CurrentScore 
                currentScore={currentScore}
            />
            <TopScore 
                topScore={topScore}
            />
        </>
    )
}