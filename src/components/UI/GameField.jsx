import Card from "./Card";

export default function GameField({ characters, onClick }) {

    return (
        <div className="card-area">
        {characters.map((char) => {
            return (
                <Card 
                    className={`card ${char.name}`}
                    name={char.name}
                    imageUrl={char.image}
                    onClick={onClick}
                    key={char.id}
                />
            ) 
        })}
        </div>
    );
}