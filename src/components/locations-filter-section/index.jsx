'use client'

import styles from './locations-filter-section.module.scss'
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

export default function LocationsFilterSection() {

    const [isFilterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [locations, setLocations] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredLocations, setFilteredLocations] = useState([]);

    const openFilter = () => setFilterOpen(true);
    const closeFilter = () => setFilterOpen(false);

    const router = useRouter();

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/location');
                setLocations(response.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchLocations();
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(e.target.value);

        if (query.length > 0) {
            const filtered = locations.filter(location =>
                location.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredLocations(filtered);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleSelectLocation = (location) => {
        setSearchQuery(location.name);
        setShowDropdown(false);
        router.push(`/locations/location/${location.id}`)
    };

    return(

        <div className={styles.locationsFilterContainer}>

            <Image 
                src='/img/locations-image.svg'
                width={326}
                height={202}
                alt='Rick and Morty'
                className={styles.locationsImage}
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
                        className={styles.input1}
                        value={searchQuery}
                        onChange={handleSearchChange} 
                    />

                    {showDropdown && (
                        <div className={styles.dropdown}>
                            {filteredLocations.map(location => (
                                <div 
                                    key={location.id} 
                                    className={styles.dropdownItem}
                                    onClick={() => handleSelectLocation(location)}
                                >
                                    {location.name}
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                <div className={styles.filterContainer2}>

                    <span className={styles.filter2Text}>

                        Type

                    </span>

                    <Image 
                        src='/icons/arrow-drop-down.svg'
                        width={24}
                        height={24}
                    />

                </div>

                <div className={styles.filterContainer2}>

                    <span className={styles.filter2Text}>

                        Dimension

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

                            Type

                        </span>

                        <Image 
                            src='/icons/arrow-drop-down.svg'
                            width={24}
                            height={24}
                        />

                    </div>

                    <div className={styles.filterContainer2}>

                        <span className={styles.filter2Text}>

                            Dimension

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

        </div>

    )

}