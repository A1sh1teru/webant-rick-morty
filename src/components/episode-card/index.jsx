'use client'

import { useRouter } from "next/navigation"
import styles from './episode-card.module.scss'

export default function EpisodeCard({ episode }) {

    const router = useRouter();
    
    return(

        <div onClick={() => router.push(`/episodes/episode/${episode.id}`)} className={styles.cardContainer}>

            <span className={styles.cardTitle}>

                {episode.name}

            </span>
                        
            <span className={styles.cardDescription}>

                {episode.air_date}

            </span>

            <span className={styles.cardDescription2}>

                {episode.episode}

            </span>

        </div>

    )

}