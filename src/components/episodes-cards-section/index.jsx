'use client'

import styles from './episodes-cards-section.module.scss'
import { useRouter } from 'next/navigation'

export default function EpisodesCardsSection() {

    const router = useRouter()

    return(

        <div className={styles.episodesCardsContainer}>

            <div className={styles.cardsContainer}>

                <div onClick={() => router.push('/episodes/episode')} className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

                <div className={styles.cardContainer}>

                    <span className={styles.cardTitle}>

                        Pilot

                    </span>
                        
                    <span className={styles.cardDescription}>

                        December 2, 2013

                    </span>

                    <span className={styles.cardDescription2}>

                        SE01E01

                    </span>

                </div>

            </div>

            <div className={styles.botBtn}>

                LOAD MORE

            </div>

        </div>

    )

}