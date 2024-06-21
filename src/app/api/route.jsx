import { getCharacterById, getEpisodesByCharacter } from './api';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const type = searchParams.get('type');

    if (!id || !type) {
        return new Response(JSON.stringify({ error: 'ID and type are required' }), { status: 400 });
    }

    try {
        let data;
        if (type === 'character') {
            data = await getCharacterById(id);
        } else if (type === 'episode') {
            data = await getEpisodeById(id);
        } else if (type === 'location') {
            data = await getLocationById(id);
        } else {
            return new Response(JSON.stringify({ error: 'Invalid type' }), { status: 400 });
        }
        
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
