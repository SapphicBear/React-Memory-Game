import "./styles/test.css";
import GameField from "./components/UI/GameField.jsx";
import { useState } from "react";

export default function App() {
    const [characters, setCharacters] = useState([{ name: "Taylor", image: "./../../public/ibu1.PNG", id: crypto.randomUUID() }]);
    // const [clickedId, setClickedId] = useState(null);


    const handleClick = () => {
        // get id of clicked and save it
        // make all cards flip over
        // randomize the output of the array of characters from the API call.
    }

    return (
        <GameField 
            characters={characters}
            onClick={() => {
                console.log("clicked!");
            }}
        />
    )
}