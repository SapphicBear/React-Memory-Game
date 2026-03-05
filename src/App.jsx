import "./styles/index.css";
import {fas} from "@fortawesome/free-solid-svg-icons";
import GameField from "./components/UI/GameField.jsx";
import Scores from "./components/UI/Scores.jsx";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

function Link({ url, name }) {
    return (
        <a
            href={url}
            target="_blank" 
            rel="noopener noreferrer"
        >{name}<FontAwesomeIcon icon="fa-solid fa-up-right-from-square"/></a>
    )
}

export default function App() {
    const [characters, setCharacters] = useState([]);
    const [chosen, setChosen] = useState(new Set());
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

    // TODO: add gameover function and state to track if the game is over/ if the score is the same as the character.length

    useEffect(() => {
        fetch(`https://ponyapi.net/v1/character/by-residence/ponyville`)
            .then(res=>res.json())
            .then((data) => {
                let list = new Set();
                let newList = [];
                let i = 0;
                while (i < 8) {
                    let randomNumber = Math.floor(Math.random() * 50);
                    if (!list.has(data.data[randomNumber].id)) {
                        list.add(data.data[randomNumber]);
                        i++;
                    } else if (list.has(data.data[randomNumber].id)) {
                        continue;
                    }
                }
                list.forEach((item) => {
                    newList.push(item);
                });
                setCharacters(newList);
            }).catch(err=> {
                setError(err);
                throw new Error(err);
            }).finally(() => setLoading(false));
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
        e.target.blur();
    }
    const links = [{name: "GitHub", link: "https://github.com/SapphicBear"}, {name: "BlueSky", link: "https://bsky.app/profile/sleepyscreen.bsky.social"}, {name: "Odin Project", link: "https://www.theodinproject.com/"}]

    return (
        <>
        <header>
            <h1>MLP Memory Card Game</h1>
            <p>Try your luck! You can only click on one of the characters per round! Try to get all of them without clicking on the same one twice!</p>
            <Scores 
            currentScore={score}
            topScore={topScore}
        />
        </header>
        <main aria-label="Game area">
        <GameField 
            error={error}
            loading={loading}
            characters={characters}
            onClick={handleClick}
        />
        </main>
        <footer>
            <p>No gen AI was used in the making of this project. This project was made using the <Link url={"https://ponyapi.net"} name="PonyAPI"/></p>
            <ul className="link-area"> Links:
                {links.map((link) => {
                    return (
                        <li><Link url={link.link} name={link.name}/></li>
                    )
                })}
            </ul>
        </footer>
        </>
    );
}