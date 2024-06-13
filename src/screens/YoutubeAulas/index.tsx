import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, View, useWindowDimensions } from 'react-native';
import { BackButton } from "@components/BackButton";
import { HeaderYoutube, HeaderText, MainContainer } from "./styles";
import Icon from '@images/icon45.svg';
import { fetchYouTubeVideos, YouTubeVideo } from '@services/APIYoutubeService';
import { RouteProp, useRoute } from "@react-navigation/native";
import { routes } from "../../types/navigation";
import CardAulas from '@components/CardAulas';
import Theme from '@themes/default';
import { FilterBox } from '@components/FilterVideosBox';

export function YoutubeAulas() {
    const route = useRoute<RouteProp<routes, 'YoutubeAulas'>>();
    const { text, duration } = route.params;
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const searchQuery = `videoaula detalhada para vestibular e Enem sobre ${text} | explicação completa | ensino médio`;
        fetchYouTubeVideos(searchQuery, duration )
            .then(setVideos)
            .catch(() => setIsLoading(false))
            .finally(() => setIsLoading(false));
    }, [text, isLoading, duration]);


    return (
        <MainContainer>
            <HeaderYoutube>
                <BackButton />
                <HeaderText>{text}</HeaderText>
                <Icon />
            </HeaderYoutube>
            <FlatList
                data={videos}
                ListHeaderComponent={<FilterBox text={text} />}
                ListHeaderComponentStyle={{
                    marginVertical: 15,
                }}
                keyExtractor={(item) => item.id.videoId}
                renderItem={({ item }) => <CardAulas video={item} />}
                showsVerticalScrollIndicator={true}
                ListEmptyComponent={
                    isLoading
                        ? <ActivityIndicator color={Theme.COLORS.primary} />
                        : <Text style={{
                            width: '100%',
                            textAlign: 'center',
                            color: Theme.COLORS.text_primary,
                            fontFamily: Theme.FONTS.contents,
                            fontSize: parseInt(Theme.FONTSIZES.medium),
                        }} >Nada encotrado</Text>
                }
                contentContainerStyle={{ padding: 10, paddingBottom: 150, }}
                ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            />
        </MainContainer>
    );
}



