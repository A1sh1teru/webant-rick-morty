'use client'

import styles from './characters-details-section.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CharactersDetailsSection() {

    const router = useRouter()

    return(

        <div className={styles.charactersDetailsContainer}>

            <div onClick={() => router.push('/')} className={styles.backRouterContainer}>

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

                <Image 
                    src='/img/characterImage.svg'
                    width={300}
                    height={300}
                    alt='character-image'
                    className={styles.characterImage}
                />

                <span className={styles.characterNameText}>

                    Rick Sanchez

                </span>

            </div>

            <div className={styles.botContainer}>

                <div className={styles.botLeftContainer}>

                    <span className={styles.botLeftContainerTitle}>

                        Informations

                    </span>

                    <div className={styles.botLeftSubContainer}>

                        <div className={styles.leftTextContainer}>

                            <span className={styles.subTitle}>

                                Gender

                            </span>

                            <span className={styles.subFeature}>

                                Male

                            </span>

                        </div>

                        <div className={styles.leftTextContainer}>

                            <span className={styles.subTitle}>

                                Status

                            </span>

                            <span className={styles.subFeature}>

                                Alive

                            </span>

                        </div>

                        <div className={styles.leftTextContainer}>

                            <span className={styles.subTitle}>

                                Specie

                            </span>

                            <span className={styles.subFeature}>

                                Human

                            </span>

                        </div>

                        <div className={styles.leftTextContainer}>

                            <span className={styles.subTitle}>

                                Origin

                            </span>

                            <span className={styles.subFeature}>

                                Earth (C-137)

                            </span>

                        </div>

                        <div className={styles.leftTextContainer}>

                            <span className={styles.subTitle}>

                                Type

                            </span>

                            <span className={styles.subFeature}>

                                Unknown

                            </span>

                        </div>

                        <div className={styles.leftTextContainer}>

                            <span className={styles.subTitle}>

                                Location

                            </span>

                            <span className={styles.subFeature}>

                                Earth (Replacement Dimension)

                            </span>

                            <Image 
                                src='/icons/arrow-right.svg'
                                width={24}
                                height={24}
                                alt='arrow-right'
                                className={styles.arrowRight}
                            />

                        </div>

                    </div>

                </div>

                <div className={styles.botRightContainer}>

                    <span className={styles.botRightContainerTitle}>

                        Episodes

                    </span>

                    <div className={styles.botRightSubContainer}>

                        <div className={styles.rightTextContainer}>

                            <span className={styles.subTitle}>

                                S01E01

                            </span>

                            <span className={styles.subFeature}>

                                Pilot

                            </span>

                            <span className={styles.subDate}>

                                December 2, 2013

                            </span>

                            <Image 
                                src='/icons/arrow-right.svg'
                                width={24}
                                height={24}
                                alt='arrow-right'
                                className={styles.arrowRight}
                            />

                        </div>

                        <div className={styles.rightTextContainer}>

                            <span className={styles.subTitle}>

                                S01E02

                            </span>

                            <span className={styles.subFeature}>

                                Lawnmower Dog

                            </span>

                            <span className={styles.subDate}>

                                December 9, 2013

                            </span>

                            <Image 
                                src='/icons/arrow-right.svg'
                                width={24}
                                height={24}
                                alt='arrow-right'
                                className={styles.arrowRight}
                            />

                        </div>

                        <div className={styles.rightTextContainer}>

                            <span className={styles.subTitle}>

                                S01E03

                            </span>

                            <span className={styles.subFeature}>

                                Anatomy Park

                            </span>

                            <span className={styles.subDate}>

                                December 16, 2013

                            </span>

                            <Image 
                                src='/icons/arrow-right.svg'
                                width={24}
                                height={24}
                                alt='arrow-right'
                                className={styles.arrowRight}
                            />

                        </div>

                        <div className={styles.rightTextContainer}>

                            <span className={styles.subTitle}>

                                S01E04

                            </span>

                            <span className={styles.subFeature}>

                                M. Night Shaym-Aliens!

                            </span>

                            <span className={styles.subDate}>

                                January 13, 2014

                            </span>

                            <Image 
                                src='/icons/arrow-right.svg'
                                width={24}
                                height={24}
                                alt='arrow-right'
                                className={styles.arrowRight}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}