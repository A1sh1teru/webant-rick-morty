'use client'

import styles from './location-card.module.scss'
import { useRouter } from 'next/navigation';

export default function LocationCard({ location }) {

    const router = useRouter();

    return(

        <div onClick={() => router.push(`/locations/location/${location.id}`)} className={styles.cardContainer}>

            <span className={styles.cardTitle}>

                {location.name}

            </span>
                        
            <span className={styles.cardDescription}>

                {location.type}

            </span>

        </div>

    )

}