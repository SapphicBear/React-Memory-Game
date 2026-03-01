export default function Card({ onClick, name, imageUrl }) {
    
    return (
        <>
            <button 
                className="card"
                type="button"
                onClick={onClick}
                style={{backgroundImage: `url(${imageUrl})`}}
            >
                <p>{name}</p>
            </button>
        </>
    );
}