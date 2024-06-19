'use client'

import styles from './locations-details-section.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LocationsDetailsSection() {

    const router = useRouter()

    return(

        <div className={styles.locationsDetailsContainer}>

            <div onClick={() => router.push('/locations')} className={styles.backRouterContainer}>

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

                    Earth (Replacement Dimension)

                </span>

                <div className={styles.topSubContainer}>

                    <div className={styles.topLeftSubContainer}>

                        <span className={styles.leftTitle}>

                            Type

                        </span>

                        <span className={styles.leftFeature}>

                            Planet

                        </span>

                    </div>

                    <div className={styles.topRightSubContainer}>

                        <span className={styles.rightTitle}>

                            Dimension

                        </span>

                        <span className={styles.rightFeature}>

                            Replacement Dimension

                        </span>

                    </div>

                </div>

            </div>

            <div className={styles.botContainer}>

                <span className={styles.midTitle}>

                    Residents

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