'use client'

import styles from './episodes-filter-section.module.scss'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function EpisodesFilterSection() {

    const [searchQuery, setSearchQuery] = useState('');
    const [episodes, setEpisodes] = useState([]);
    const [filteredEpisodes, setFilteredEpisodes] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/episode');
                setEpisodes(response.data.results);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        };

        fetchEpisodes();
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        filterEpisodes(query);
    };

    const filterEpisodes = (query) => {
        const filtered = episodes.filter(episode =>
            episode.name.toLowerCase().includes(query.toLowerCase()) ||
            episode.episode.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEpisodes(filtered);
        setShowDropdown(query.length > 0);
    };

    const handleSelectEpisode = (episode) => {
        setSearchQuery(`${episode.name} (${episode.episode})`);
        setShowDropdown(false);
        router.push(`/episodes/episode/${episode.id}`);
    };

    return(

        <div className={styles.episodesFilterContainer}>

            <Image 
                src='/img/episodes-image.svg'
                width={326}
                height={202}
                alt='Rick and Morty'
                className={styles.episodesImage}
            />

            <div className={styles.filtersContainer}>

                <div className={styles.filterContainer1}>

                    <Image 
                        src='/icons/search.svg'
                        width={24}
                        height={24}
                        alt='search'
                    />

                    <input 
                        type="search" 
                        placeholder='Filter by name or episode (ex. S01 or S01E02)' 
                        className={styles.input1} 
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />

                    {showDropdown && (
                        <div className={styles.dropdown}>
                            {filteredEpisodes.map(episode => (
                                <div 
                                    key={episode.id} 
                                    className={styles.dropdownItem}
                                    onClick={() => handleSelectEpisode(episode)}
                                >
                                    <div className={styles.dropdownItemName}>{episode.name}</div>
                                    <div className={styles.dropdownItemCode}>{episode.episode}</div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

            </div>

        </div>

    )

}