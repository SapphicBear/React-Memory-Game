export default function Card({ onClick, name, imageUrl }) {
    
    return (
        <>
            <button 
                className="card"
                aria-label={`character card, ${name}`}
                type="button"
                onClick={onClick}
                style={{backgroundImage: `url(${imageUrl})`}}
            >
                <p>{name}</p>
            </button>
        </>
    );
}