'use client'

import styles from './locations-cards-section.module.scss'
import LocationCard from '../location-card'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function LocationsCardsSection() {

    const [locations, setLocations] = useState([]);

    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLocations = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
                setLocations(prevLocations => {
                    const newLocations = response.data.results.filter(newChar => 
                        !prevLocations.some(prevChar => prevChar.id === newChar.id)
                    );
                    return [...prevLocations, ...newLocations];
                });
            } catch (error) {
                console.error('Error fetching locations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, [page]);

    const loadMoreLocations = () => {
        setPage(prevPage => prevPage + 1);
    };

    return(

        <div className={styles.locationsCardsContainer}>

            <div className={styles.cardsContainer}>

                {locations.map(location =>(
                    <LocationCard key={location.id} location = {location} />
                ))}

            </div>

            <div className={styles.botBtn} onClick={loadMoreLocations}>

                {loading ? 'Loading...' : 'LOAD MORE'}

            </div>

        </div>

    )

}