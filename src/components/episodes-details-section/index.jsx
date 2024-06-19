'use client'

import styles from './episodes-details-section.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function EpisodesDetailsSection() {

    const router = useRouter()

    return(

        <div className={styles.episodesDetailsContainer}>

            <div onClick={() => router.push('/episodes')} className={styles.backRouterContainer}>

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

                    Pilot

                </span>

                <div className={styles.topSubContainer}>

                    <div className={styles.topLeftSubContainer}>

                        <span className={styles.leftTitle}>

                            Episode

                        </span>

                        <span className={styles.leftFeature}>

                            SE01E01

                        </span>

                    </div>

                    <div className={styles.topRightSubContainer}>

                        <span className={styles.rightTitle}>

                            Date

                        </span>

                        <span className={styles.rightFeature}>

                            December 2, 2013

                        </span>

                    </div>

                </div>

            </div>

            <div className={styles.botContainer}>

                <span className={styles.midTitle}>

                    Cast

                </span>

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

            </div>

            <div className={styles.botBtn}>

                LOAD MORE

            </div>

        </div>

    )

}