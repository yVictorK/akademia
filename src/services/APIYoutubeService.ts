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

interface YouTubeApiParams {
    part: string;
    maxResults: number;
    key: string;
    q: string;
    type: string;
    videoDuration?: 'short' | 'medium' | 'long' | string;
}

export const fetchYouTubeVideos = async (searchQuery: string, duration?: 'any' |'short' | 'medium' | 'long' ): Promise<YouTubeVideo[]> => {
    try {
        const params: YouTubeApiParams = {
            part: 'snippet',
            maxResults: 10,
            key: API_KEY,
            q: searchQuery,
            type: 'video'
        };
        
        if (duration) {
            params.videoDuration = duration; 
        }

        const response = await axios.get<YouTubeApiResponse>(BASE_URL, { params });
        return response.data.items;
    } catch (error) {
        console.error('Ocorreu um erro ao buscar os vídeos', error);
        throw error;
    }
};
