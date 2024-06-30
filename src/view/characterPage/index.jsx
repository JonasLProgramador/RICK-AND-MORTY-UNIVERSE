// src/pages/HomePage.js
import { useEffect, useState } from 'react';
import { fetchRandomCharacters } from '../models/fetchPersonagens';
import Card from '../components/Card';
import Header from '../components/Header';

const CharacterPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const loadCharacters = async () => {
            const randomCharacters = await fetchRandomCharacters();
            setCharacters(randomCharacters);
        };
        loadCharacters();
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen bg-[url('./src/assets/rick-and-morty.gif')] bg-cover">
            <Header links={[
                { id: 1, to: "/", text: "Home" },
                { id: 2, to: "/history", text: "Histórico" }
            ]} />
            <div className="flex flex-wrap justify-center mt-10">
                {characters.map(character => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default CharacterPage;
