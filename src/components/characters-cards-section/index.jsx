'use client'

import styles from './characters-cards-section.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CharactersCardsSection() {

    const router = useRouter()

    return(

        <div className={styles.charactersCardsContainer}>

            <div className={styles.cardsContainer}>

                <div onClick={() => router.push('/character')} className={styles.cardContainer}>

                    <div className={styles.imageContainer}>

                        <Image
                            src='/img/cardImage.svg'
                            fill={true}
                            className={styles.cardImage}
                        />

                    </div>

                    <div className={styles.cardInfoContainer}>

                        <span className={styles.cardTitle}>

                            Rick Sanchez

                        </span>
                        
                        <span className={styles.cardDescription}>

                            Human

                        </span>

                    </div>

                </div>

                <div className={styles.cardContainer}>

                    <div className={styles.imageContainer}>

                        <Image
                            src='/img/cardImage.svg'
                            fill={true}
                            className={styles.cardImage}
                        />

                    </div>

                    <div className={styles.cardInfoContainer}>

                        <span className={styles.cardTitle}>

                            Rick Sanchez

                        </span>
                        
                        <span className={styles.cardDescription}>

                            Human

                        </span>

                    </div>

                </div>

                <div className={styles.cardContainer}>

                    <div className={styles.imageContainer}>

                        <Image
                            src='/img/cardImage.svg'
                            fill={true}
                            className={styles.cardImage}
                        />

                    </div>

                    <div className={styles.cardInfoContainer}>

                        <span className={styles.cardTitle}>

                            Rick Sanchez

                        </span>
                        
                        <span className={styles.cardDescription}>

                            Human

                        </span>

                    </div>

                </div>

                <div className={styles.cardContainer}>

                    <div className={styles.imageContainer}>

                        <Image
                            src='/img/cardImage.svg'
                            fill={true}
                            className={styles.cardImage}
                        />

                    </div>

                    <div className={styles.cardInfoContainer}>

                        <span className={styles.cardTitle}>

                            Rick Sanchez

                        </span>
                        
                        <span className={styles.cardDescription}>

                            Human

                        </span>

                    </div>

                </div>

                <div className={styles.cardContainer}>

                    <div className={styles.imageContainer}>

                        <Image
                            src='/img/cardImage.svg'
                            fill={true}
                            className={styles.cardImage}
                        />

                    </div>

                    <div className={styles.cardInfoContainer}>

                        <span className={styles.cardTitle}>

                            Rick Sanchez

                        </span>
                        
                        <span className={styles.cardDescription}>

                            Human

                        </span>

                    </div>

                </div>

                <div className={styles.cardContainer}>

                    <div className={styles.imageContainer}>

                        <Image
                            src='/img/cardImage.svg'
                            fill={true}
                            className={styles.cardImage}
                        />

                    </div>

                    <div className={styles.cardInfoContainer}>

                        <span className={styles.cardTitle}>

                            Rick Sanchez

                        </span>
                        
                        <span className={styles.cardDescription}>

                            Human

                        </span>

                    </div>

                </div>

                <div className={styles.cardContainer}>

                    <div className={styles.imageContainer}>

                        <Image
                            src='/img/cardImage.svg'
                            fill={true}
                            className={styles.cardImage}
                        />

                    </div>

                    <div className={styles.cardInfoContainer}>

                        <span className={styles.cardTitle}>

                            Rick Sanchez

                        </span>
                        
                        <span className={styles.cardDescription}>

                            Human

                        </span>

                    </div>

                </div>

                <div className={styles.cardContainer}>

                    <div className={styles.imageContainer}>

                        <Image
                            src='/img/cardImage.svg'
                            fill={true}
                            className={styles.cardImage}
                        />

                    </div>

                    <div className={styles.cardInfoContainer}>

                        <span className={styles.cardTitle}>

                            Rick Sanchez

                        </span>
                        
                        <span className={styles.cardDescription}>

                            Human

                        </span>

                    </div>

                </div>

            </div>

            <div className={styles.botBtn}>

                LOAD MORE

            </div>

        </div>

    )

}