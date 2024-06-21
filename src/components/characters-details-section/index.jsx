'use client';

import { useState, useEffect } from 'react';
import styles from './characters-details-section.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getCharacterById, getEpisodesByCharacter } from '../../app/api/route.jsx';

export default function CharactersDetailsSection({ id }) {
    const [character, setCharacter] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (id) {
            getCharacterById(id).then(data => {
                setCharacter(data);
                return getEpisodesByCharacter(data.episode);
            }).then(episodesData => {
                setEpisodes(episodesData);
            }).catch(error => {
                console.error('Error fetching character or episodes data:', error);
            });
        }
    }, [id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    const handleLocationClick = () => {
        const locationId = character.location.url.split('/').pop();
        router.push(`/locations/location/${locationId}`);
    };

    return (
        <div className={styles.charactersDetailsContainer}>
            <div onClick={() => router.push('/')} className={styles.backRouterContainer}>
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
                <Image
                    src={character.image}
                    width={300}
                    height={300}
                    alt='character-image'
                    className={styles.characterImage}
                />
                <span className={styles.characterNameText}>
                    {character.name}
                </span>
            </div>
            <div className={styles.botContainer}>
                <div className={styles.botLeftContainer}>
                    <span className={styles.botLeftContainerTitle}>
                        Informations
                    </span>
                    <div className={styles.botLeftSubContainer}>
                        <div className={styles.leftTextContainer}>
                            <span className={styles.subTitle}>
                                Gender
                            </span>
                            <span className={styles.subFeature}>
                                {character.gender}
                            </span>
                        </div>
                        <div className={styles.leftTextContainer}>
                            <span className={styles.subTitle}>
                                Status
                            </span>
                            <span className={styles.subFeature}>
                                {character.status}
                            </span>
                        </div>
                        <div className={styles.leftTextContainer}>
                            <span className={styles.subTitle}>
                                Species
                            </span>
                            <span className={styles.subFeature}>
                                {character.species}
                            </span>
                        </div>
                        <div className={styles.leftTextContainer}>
                            <span className={styles.subTitle}>
                                Origin
                            </span>
                            <span className={styles.subFeature}>
                                {character.origin.name}
                            </span>
                        </div>
                        <div className={styles.leftTextContainer}>
                            <span className={styles.subTitle}>
                                Type
                            </span>
                            <span className={styles.subFeature}>
                                {character.type || 'Unknown'}
                            </span>
                        </div>
                        <div className={styles.leftTextContainerLocation} onClick={handleLocationClick}>
                            <span className={styles.subTitle}>
                                Location
                            </span>
                            <span className={styles.subFeature}>
                                {character.location.name}
                            </span>
                            <Image
                                src='/icons/arrow-right.svg'
                                width={24}
                                height={24}
                                alt='arrow-right'
                                className={styles.arrowRight}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.botRightContainer}>
                    <span className={styles.botRightContainerTitle}>
                        Episodes
                    </span>
                    <div className={styles.botRightSubContainer}>
                        {episodes.map(episode => (
                            <div key={episode.id} className={styles.rightTextContainer} onClick={() => router.push(`/episodes/episode/${episode.id}`)}>
                                <span className={styles.subTitle}>
                                    {episode.episode}
                                </span>
                                <span className={styles.subFeature}>
                                    {episode.name}
                                </span>
                                <span className={styles.subDate}>
                                    {episode.air_date}
                                </span>
                                <Image
                                    src='/icons/arrow-right.svg'
                                    width={24}
                                    height={24}
                                    alt='arrow-right'
                                    className={styles.arrowRight}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}