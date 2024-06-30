const Card = ({ character }) => {
    return (
        <div className="card flex flex-col items-center justify-center p-4 bg-white bg-opacity-90 rounded-lg shadow-lg m-4 w-60">
            <img src={character.image} alt={character.name} className="rounded-full w-32 h-32 mb-4"/>
            <h2 className="text-xl font-bold text-gray-700 mb-2">{character.name}</h2>
            <p className="text-gray-600">Status: {character.status}</p>
            <p className="text-gray-600">Espécie: {character.species}</p>
        
        </div>
    );
};

export default Card;
