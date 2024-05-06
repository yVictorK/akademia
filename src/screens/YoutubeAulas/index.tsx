import { BackButton } from "../../components/BackButton";
import { HeaderYoutube, HeaderText, MainContainer } from "./styles";
import Icon from '../../assets/images/icon45.svg';
import { CardYoutube } from "../../components/CardsYoutube";
import { FlatList, View } from 'react-native';

export function YoutubeAulas() {
    return (
        <MainContainer>
            <HeaderYoutube>
                <BackButton />
                <HeaderText>Videoaulas</HeaderText>
                <Icon />
            </HeaderYoutube>
            
        </MainContainer>
    );
}
