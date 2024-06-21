'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './character-card.module.scss';

export default function CharacterCard({ character }) {

    const router = useRouter();

    return (
        <div onClick={() => router.push(`/character/${character.id}`)} className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image
                    src={character.image}
                    fill={true}
                    className={styles.cardImage}
                    alt={character.name}
                />
            </div>
            <div className={styles.cardInfoContainer}>
                <span className={styles.cardTitle}>
                    {character.name}
                </span>
                <span className={styles.cardDescription}>
                    {character.species}
                </span>
            </div>
        </div>
    );
}