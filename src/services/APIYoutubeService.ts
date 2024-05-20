import axios from 'axios';

const API_KEY = 'AIzaSyC3_8VQVFFzgVSwTO56-4-3aGELEldqlOc';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export interface YouTubeVideo {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
    };
}

interface YouTubeApiResponse {
    items: YouTubeVideo[];
}

export const fetchYouTubeVideos = async (searchQuery: string): Promise<YouTubeVideo[]> => {
    try {
        const response = await axios.get<YouTubeApiResponse>(BASE_URL, {
            params: {
                part: 'snippet',
                maxResults: 10,
                key: API_KEY,
                q: searchQuery,
                type: 'video'
            }
        });
        return response.data.items;
    } catch (error) {
        console.error('Erro ao buscar vídeos', error);
        return [];
    }
};
