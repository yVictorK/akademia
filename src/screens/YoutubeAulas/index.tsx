import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, useWindowDimensions } from 'react-native';
import { BackButton } from "../../components/BackButton";
import { HeaderYoutube, HeaderText, MainContainer } from "./styles";
import Icon from '../../assets/images/icon45.svg';
import { fetchYouTubeVideos, YouTubeVideo } from '../../services/APIYoutubeService';
import { RouteProp, useRoute } from "@react-navigation/native";
import { routes } from "types/navigation";
import YoutubeIframe from 'react-native-youtube-iframe';

interface RouteParams {
    text: string;
}

export function YoutubeAulas() {
    const route = useRoute<RouteProp<routes, 'YoutubeAulas'>>();
    const { text } = route.params;
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const { width } = useWindowDimensions();
    const videoWidth = width*0.8;
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const searchQuery = `aulas para vestibular e Enem de ${text}`;
        fetchYouTubeVideos(searchQuery).then(setVideos);
    }, [text]);

    const height = videos[0]?.snippet.thumbnails.high;
    console.log(height);

    return (
        <MainContainer>
            <HeaderYoutube>
                <BackButton />
                <HeaderText>{text}</HeaderText>
                <Icon />
            </HeaderYoutube>
            <View
                style={{

                    width: '100%',
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 15,
                        backgroundColor: '#3A3D5C',
                    }}
                >
                    <YoutubeIframe
                        height={videoWidth* 0.6}
                        videoId={videos[0]?.id.videoId}
                        width={videoWidth}
                        onReady={() => setReady(true)}

                    />
                    <Text
                        style={{
                            color: 'white',
                            padding: 10,
                            fontFamily: 'NexaHeavy',
                        }}
                    >{videos[0]?.snippet.title}</Text>
                    {!ready && <ActivityIndicator color="blue" />}
                </View>

            </View>
        </MainContainer>
    );
}