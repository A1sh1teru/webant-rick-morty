'use client'

import styles from './characters-filter-section.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function Filter({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div className={styles.filterOverlay}>
            <div className={styles.filterContent}>
                <button onClick={onClose} className={styles.closeButton}>

                    <Image 
                        src='/icons/cross-filter.svg'
                        width={24}
                        height={24}
                        alt='close'
                    />

                </button>
                {children}
            </div>
        </div>
    );
}

export default function CharactersFilterSection() {

    const [isFilterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [characters, setCharacters] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const openFilter = () => setFilterOpen(true);
    const closeFilter = () => setFilterOpen(false);

    const router = useRouter();

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setCharacters(response.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(e.target.value);

        if (query.length > 0) {
            const filtered = characters.filter(character =>
                character.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCharacters(filtered);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleSelectCharacter = (character) => {
        setSearchQuery(character.name);
        setShowDropdown(false);
        router.push(`/character/${character.id}`)
    };

    return(

        <div className={styles.charactersFilterContainer}>

            <Image 
                src='/img/characters-image.svg'
                width={600}
                height={200}
                alt='Rick and Morty'
                className={styles.charactersImage}
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
                        placeholder='Filter by name...' 
                        value={searchQuery}
                        onChange={handleSearchChange} 
                        className={styles.input1} 
                    />

                    {showDropdown && (
                        <div className={styles.dropdown}>
                            {filteredCharacters.map(character => (
                                <div 
                                    key={character.id} 
                                    className={styles.dropdownItem}
                                    onClick={() => handleSelectCharacter(character)}
                                >
                                    {character.name}
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                <div className={styles.filterContainer2}>

                    <span className={styles.filter2Text}>

                        Species

                    </span>

                    <Image 
                        src='/icons/arrow-drop-down.svg'
                        width={24}
                        height={24}
                    />

                </div>

                <div className={styles.filterContainer2}>

                    <span className={styles.filter2Text}>

                        Gender

                    </span>

                    <Image 
                        src='/icons/arrow-drop-down.svg'
                        width={24}
                        height={24}
                    />

                </div>

                <div className={styles.filterContainer2}>

                    <span className={styles.filter2Text}>

                        Status

                    </span>

                    <Image 
                        src='/icons/arrow-drop-down.svg'
                        width={24}
                        height={24}
                    />

                </div>

                <div className={styles.filterContainer3} onClick={openFilter}>

                    <Image 
                        src='/icons/filter.svg'
                        width={24}
                        height={24}
                        alt='search'
                    />

                    <span className={styles.filterContainer3Text}>

                        ADVANCED FILTERS

                    </span>

                </div>

            </div>

            <Filter isOpen={isFilterOpen} onClose={closeFilter}>
                
                <div className={styles.filterFiltersContainer}>

                    <span className={styles.filterFiltersContainerTitle}>

                        Filters

                    </span>

                    <div className={styles.filterContainer2}>

                        <span className={styles.filter2Text}>
                            
                            Species
                            
                        </span>

                        <Image
                            src='/icons/arrow-drop-down.svg'
                            width={24}
                            height={24}
                        />

                    </div>

                    <div className={styles.filterContainer2}>

                        <span className={styles.filter2Text}>
                            
                            Gender
                            
                        </span>

                        <Image
                            src='/icons/arrow-drop-down.svg'
                            width={24}
                            height={24}
                        />

                    </div>

                    <div className={styles.filterContainer2}>

                        <span className={styles.filter2Text}>
                            
                            Status
                            
                        </span>

                        <Image
                            src='/icons/arrow-drop-down.svg'
                            width={24}
                            height={24}
                        />

                    </div>

                    <div className={styles.applyBtn}>

                        APPLY

                    </div>

                </div>

            </Filter>
{/* 
            <div className={styles.charactersList}>
                {filteredCharacters.map(character => (
                    <div key={character.id} className={styles.characterCard}>
                        <Image 
                            src={character.image} 
                            width={150} 
                            height={150} 
                            alt={character.name} 
                        />
                        <span>{character.name}</span>
                    </div>
                ))}
            </div> */}

        </div>

    )

}