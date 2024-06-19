import styles from './episodes-filter-section.module.scss'
import Image from 'next/image'

export default function EpisodesFilterSection() {

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

                    <input type="search" placeholder='Filter by name or episode (ex. S01 or S01E02)' className={styles.input1} />

                </div>

            </div>

        </div>

    )

}