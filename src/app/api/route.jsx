 
    import axios from 'axios';

    const API_URL1 = 'https://rickandmortyapi.com/api/character';
    const API_URL2 = 'https://rickandmortyapi.com/api/location';
    const API_URL3 = 'https://rickandmortyapi.com/api/episode';

    export const getCharacterById = async (id) => {
        try {
            const response = await axios.get(`${API_URL1}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching character data:', error);
            throw error;
        }
    };

    export const getLocationById = async (id) => {
        try {
            const response = await axios.get(`${API_URL2}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching location data:', error);
            throw error;
        }
    }

    export const getEpisodeById = async (id) => {
        try {
            const response = await axios.get(`${API_URL3}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching episode data:', error);
            throw error;
        }
    }

    export const getEpisodesByCharacter = async (episodeUrls) => {
        try {
            const episodePromises = episodeUrls.map(url => axios.get(url));
            const episodes = await Promise.all(episodePromises);
            return episodes.map(response => response.data);
        } catch (error) {
            console.error('Error fetching episodes data:', error);
            throw error;
        }
    };

    export const getCharactersByLocation = async (characterUrls) => {
        try {
            const characterPromises = characterUrls.map(url => axios.get(url));
            const characters = await Promise.all(characterPromises);
            return characters.map(response => response.data);
        } catch (error) {
            console.error('Error fetching characters data:', error);
            throw error;
        }
    }

    export const getCharactersByEpisode = async (characterUrls) => {
        try {
            const characterPromises = characterUrls.map(url => axios.get(url));
            const characters = await Promise.all(characterPromises);
            return characters.map(response => response.data);
        } catch (error) {
            console.error('Error fetching characters data:', error);
            throw error;
        }
    }