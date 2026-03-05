import Card from "./Card";

export default function GameField({ loading, characters, onClick, error }) {

    if (loading) {
        return (
            <div className="card-area"> 
                <h2 className="loading">Loading...</h2>
            </div>
        )
    }
    if (error) {
        return (
            <div className="card-area">
                <h2 className="error">An Error has occurred</h2>
            </div>
        )
    }

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