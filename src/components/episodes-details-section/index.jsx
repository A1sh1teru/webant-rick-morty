'use client'

import styles from './episodes-details-section.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { getEpisodeById, getCharactersByEpisode } from '../../app/api/api.jsx';
import CharacterCard from '../character-card'

export default function EpisodesDetailsSection({ id }) {

    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if (id) {
            getEpisodeById(id).then(data => {
                setEpisode(data);
                return getCharactersByEpisode(data.characters.slice(0, 20));
            }).then(charactersData => {
                setCharacters(charactersData);
            }).catch(error => {
                console.error('Error fetching episode or characters data:', error);
            });
        }
    }, [id]);

    if (!episode) {
        return <div>Loading...</div>;
    }

    const loadMoreCharacters = async () => {
        if (episode) {
            setLoading(true);
            const nextPageCharacters = episode.characters.slice(currentPage * 20, (currentPage + 1) * 20);
            if (nextPageCharacters.length > 0) {
                try {
                    const newCharacters = await getCharactersByEpisode(nextPageCharacters);
                    setCharacters(prevCharacters => [...prevCharacters, ...newCharacters]);
                    setCurrentPage(prevPage => prevPage + 1);
                } catch (error) {
                    console.error('Error fetching more characters:', error);
                }
            }
            setLoading(false);
        }
    };

    return(

        <div className={styles.episodesDetailsContainer}>

            <div onClick={() => router.push('/episodes')} className={styles.backRouterContainer}>

                <Image 
                    src='/icons/arrow-left-back.svg'
                    width={24}
                    height={24}
                    alt='arrow-left-back'
                />

                <span className={styles.routerText}>

                    GO BACK

                </span>

            </div>

            <div className={styles.topContainer}>

                <span className={styles.topTitle}>

                    {episode.name}

                </span>

                <div className={styles.topSubContainer}>

                    <div className={styles.topLeftSubContainer}>

                        <span className={styles.leftTitle}>

                            Episode

                        </span>

                        <span className={styles.leftFeature}>

                            {episode.episode}

                        </span>

                    </div>

                    <div className={styles.topRightSubContainer}>

                        <span className={styles.rightTitle}>

                            Date

                        </span>

                        <span className={styles.rightFeature}>

                            {episode.air_date}

                        </span>

                    </div>

                </div>

            </div>

            <div className={styles.botContainer}>

                <span className={styles.midTitle}>

                    Cast

                </span>

                <div className={styles.cardsContainer}>

                    {characters.map(character => (

                        <div onClick={() => router.push(`/character/${character.id}`)} className={styles.cardContainer}>

                            <CharacterCard key={character.id} character={character} />

                        </div>

                    ))}

                </div>

            </div>

            {episode.characters.length > characters.length && (

                <div className={styles.botBtn} onClick={loadMoreCharacters}>

                    {loading ? 'Loading...' : 'LOAD MORE'}
                    
                </div>

            )}

        </div>

    )

}