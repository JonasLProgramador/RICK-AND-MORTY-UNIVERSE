// src/models/fetchPersonagens.js
import axios from 'axios';

export const fetchRandomCharacters = async (count = 5) => {
    try {
        const randomIds = Array.from({ length: count }, () => Math.floor(Math.random() * 826) + 1);
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${randomIds}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar personagens aleatórios:", error);
        return [];
    }
};
