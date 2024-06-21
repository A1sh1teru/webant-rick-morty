'use client';

import { useState, useEffect } from 'react';
import styles from './locations-details-section.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getLocationById, getCharactersByLocation } from '../../app/api/route';
import CharacterCard from '../character-card'

export default function LocationsDetailsSection({ id }) {

    const [location, setLocation] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if (id) {
            getLocationById(id).then(data => {
                setLocation(data);
                return getCharactersByLocation(data.residents.slice(0, 20));
            }).then(charactersData => {
                setCharacters(charactersData);
            }).catch(error => {
                console.error('Error fetching location or characters data:', error);
            });
        }
    }, [id]);

    if (!location) {
        return <div>Loading...</div>;
    }

    const loadMoreCharacters = async () => {
        if (location) {
            setLoading(true);
            const nextPageCharacters = location.residents.slice(currentPage * 20, (currentPage + 1) * 20);
            if (nextPageCharacters.length > 0) {
                try {
                    const newCharacters = await getCharactersByLocation(nextPageCharacters);
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

        <div className={styles.locationsDetailsContainer}>

            <div onClick={() => router.push('/locations')} className={styles.backRouterContainer}>

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

                    {location.name}

                </span>

                <div className={styles.topSubContainer}>

                    <div className={styles.topLeftSubContainer}>

                        <span className={styles.leftTitle}>

                            Type

                        </span>

                        <span className={styles.leftFeature}>

                            {location.type}

                        </span>

                    </div>

                    <div className={styles.topRightSubContainer}>

                        <span className={styles.rightTitle}>

                            Dimension

                        </span>

                        <span className={styles.rightFeature}>

                            {location.dimension}

                        </span>

                    </div>

                </div>

            </div>

            <div className={styles.botContainer}>

                <span className={styles.midTitle}>

                    Residents

                </span>

                <div className={styles.cardsContainer}>

                    {characters.map(character => (

                        <div onClick={() => router.push(`/character/${character.id}`)} className={styles.cardContainer}>

                            <CharacterCard key={character.id} character={character} />

                        </div>

                    ))}

                </div>

            </div>

            {location.residents.length > characters.length && (

                <div className={styles.botBtn} onClick={loadMoreCharacters}>

                    {loading ? 'Loading...' : 'LOAD MORE'}
                    
                </div>
            )}

        </div>

    )

}