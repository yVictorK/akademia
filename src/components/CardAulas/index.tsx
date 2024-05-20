import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { YouTubeVideo } from '../../services/APIYoutubeService';

interface VideoItemProps {
    video: YouTubeVideo;
}

const CardAulas = ({ video }: VideoItemProps) => {
    const { width } = useWindowDimensions();
    const videoWidth = width * 0.8;
    const videoHeight = videoWidth * 0.6;
    const [play, setPlay] = useState(false); 

    return (
        <View style={styles.container}>
            <YoutubeIframe
                height={videoHeight}
                videoId={video.id.videoId}
                width={videoWidth}
                play={play}
                onChangeState={event => {
                    if (event === 'unstarted') {
                        setPlay(false); 
                    }
                }}
            />
            <Text style={styles.title}>{video.snippet.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#3A3D5C',
        marginBottom: 20
    },
    title: {
        color: 'white',
        padding: 10,
        fontFamily: 'NexaHeavy',
    }
});

export default CardAulas;
