'use client'

import { useRouter } from 'next/navigation'
import styles from './locations-cards-section.module.scss'

export default function LocationsCardsSection() {

    const router = useRouter()

    return(

        <div className={styles.locationsCardsContainer}>

            <div className={styles.cardsContainer}>

                <div onClick={() => router.push('/locations/location')} className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Earth (C-137)

                    </span>
                        
                    <span className={styles.cardDescription}>

                        Planet

                    </span>

                </div>

            </div>

            <div className={styles.botBtn}>

                LOAD MORE

            </div>

        </div>

    )

}