import "./styles/test.css";
import "./styles/index.css";
import GameField from "./components/UI/GameField.jsx";
import Scores from "./components/UI/Scores.jsx";
import { useState, useEffect } from "react";

export default function App() {
    const [characters, setCharacters] = useState([]);
    const [chosen, setChosen] = useState(new Set());
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);

    function handleScore() {
        setScore(score + 1);
    }

    function handleTopScore() {
        if (score <= topScore) {
            return;
        } else {
            setTopScore(score);
        }
    }

    useEffect(() => {
        fetch(`http://ponyapi.net/v1/character/by-residence/ponyville`)
            .then(res=>res.json())
            .then((data) => {
                let list = new Set();
                let newList = [];
                let i = 0;
                while (i < 9) {
                    let randomNumber = Math.floor(Math.random() * 50);
                    if (!list.has(data.data[randomNumber].id)) {
                        list.add(data.data[randomNumber]);
                        i++;
                    } else {
                        continue;
                    }
                }
                list.forEach((item) => {
                    newList.push(item);
                });
                setCharacters(newList);
            }).catch(err=>console.log(err));
    }, []);

    const handleClick = (e) => {
        let clicked = e.target.childNodes[0].textContent;
        const shuffle = () => {
            let i = characters.length, j, temp, array;
            array = characters.slice();
            while (--i > 0) {
                j = Math.floor(Math.random() * (i + 1));
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
            return array;
        }

        if (chosen.has(clicked)) {
            setChosen(new Set());
            handleTopScore();
            setScore(0);
            console.log("Game over!");
            setCharacters(shuffle());
        } else {
            setChosen(chosen.add(clicked));
            console.log(chosen);
            handleScore();
            let newList = shuffle();
            setCharacters(newList);
            console.log("score + 1")
        }
    }

    return (
        <>
        <header>
            <h1>MLP Memory Card Game</h1>
            <p>Try your luck! You can only click on one of the characters per round! Try to get all of them without clicking on the same one twice!</p>
        </header>
        <Scores 
            currentScore={score}
            topScore={topScore}
        />
        <GameField 
            characters={characters}
            onClick={handleClick}
        />
        </>
    );
}