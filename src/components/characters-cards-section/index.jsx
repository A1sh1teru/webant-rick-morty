'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../character-card';
import styles from './characters-cards-section.module.scss';

export default function CharactersCardsSection() {

    const [characters, setCharacters] = useState([]);

    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                setCharacters(prevCharacters => {
                    const newCharacters = response.data.results.filter(newChar => 
                        !prevCharacters.some(prevChar => prevChar.id === newChar.id)
                    );
                    return [...prevCharacters, ...newCharacters];
                });
            } catch (error) {
                console.error('Error fetching characters:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [page]);

    const loadMoreCharacters = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className={styles.charactersCardsContainer}>
            <div className={styles.cardsContainer}>
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
            <div className={styles.botBtn} onClick={loadMoreCharacters}>
                {loading ? 'Loading...' : 'LOAD MORE'}
            </div>
        </div>
    );
}