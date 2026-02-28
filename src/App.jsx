import "./styles/test.css";

export default function App() {

    let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function handleClick(e) {
        e.target.classList.toggle("clicked");
    }
    return(
        <div className="card-area">
            {cards.map((card, i) => {
                return (
                    <div 
                className={"card" + " " + "item" + card} 
                key={i}
                onClick={handleClick}
                >
                    test{card}
                </div>
                );
            })}
        </div>
    )
}