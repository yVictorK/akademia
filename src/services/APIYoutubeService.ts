import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyBE-K5w2Y87McGGOahKOk_B_Z4Hx4ORg0U';
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
                key: YOUTUBE_API_KEY,
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
