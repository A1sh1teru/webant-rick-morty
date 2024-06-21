'use client'

import styles from './episodes-cards-section.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EpisodeCard from '../episode-card'

export default function EpisodesCardsSection() {

    const [episodes, setEpisodes] = useState([]);

    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEpisodes = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
                setEpisodes(prevEpisodes => {
                    const newEpisodes = response.data.results.filter(newChar => 
                        !prevEpisodes.some(prevChar => prevChar.id === newChar.id)
                    );
                    return [...prevEpisodes, ...newEpisodes];
                });
            } catch (error) {
                console.error('Error fetching episodes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, [page]);

    const loadMoreEpisodes = () => {
        setPage(prevPage => prevPage + 1);
    };


    return(

        <div className={styles.episodesCardsContainer}>

            <div className={styles.cardsContainer}>

                {episodes.map(episode =>(
                    <EpisodeCard key={episode.id} episode = {episode} />
                ))}

            </div>

            <div className={styles.botBtn} onClick={loadMoreEpisodes}>

                {loading ? 'Loading...' : 'LOAD MORE'}

            </div>

        </div>

    )

}