'use client'

import styles from './characters-filter-section.module.scss'
import Image from 'next/image'
import { useState } from 'react'

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

    const openFilter = () => setFilterOpen(true);
    const closeFilter = () => setFilterOpen(false);

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

                    <input type="search" placeholder='Filter by name...' className={styles.input1} />

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

        </div>

    )

}