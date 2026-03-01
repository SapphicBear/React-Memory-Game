import "./styles/test.css";
import GameField from "./components/UI/GameField.jsx";
import Scores from "./components/UI/Scores.jsx";
import { useState, useEffect } from "react";

export default function App() {
    const [characters, setCharacters] = useState([]);
    // const [clickedId, setClickedId] = useState(null);

    // const [score, setScore] = useState(0);

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

    const handleClick = () => {
        // get id of clicked and save it
        // add 1 to score and topscore if applicable
        // make all cards flip over
        // randomize the output of the array of characters from the API call.
    }

    return (
        <>
        <Scores />
        <GameField 
            characters={characters}
            onClick={() => {
                console.log("clicked!");
            }}
        />
        </>
    )
}