import { BackButton } from "@components/BackButton";
import { HeaderYoutube, HeaderText, MainContainer } from "./styles";
import Icon from '@images/icon45.svg';
import { CardYoutube } from "@components/CardsYoutube";
import { FlatList, View } from 'react-native';
import Art from "@images/ArtIcon.svg";
import History from "@images/HistoryIcon.svg";
import Geografy from "@images/Geografy.svg";
import Math from "@images/math.svg";
import Idioma from "@images/idioma.svg";
import Physics from "@images/physics-formula-svgrepo-com.svg";
import Atom from "@images/atom.svg";
import Biology from "@images/biology.svg";

const materias = [
    { text: 'Arte', image: <Art width={90} height={90} fill={'#cccccc'} />, color: '#d3a007' },
    { text: 'História', image: <History width={90} height={90} fill={'none'} />, color: '#bf550e93' },
    { text: 'Geografia', image: <Geografy width={90} height={90} />, color: '#d36b02d4' },
    { text: 'Matemática', image: <Math width={90} height={90} />, color: '#b02828' },
    { text: 'Português', image: <Idioma width={90} height={90} />, color: '#2377b8' },
    { text: 'Física', image: <Physics width={90} height={90} />, color: '#23b875' },
    { text: 'Química', image: <Atom width={90} height={90} />, color: '#9526bd' },
    { text: 'Biologia', image: <Biology width={90} height={90} />, color: '#23b857' },
];

export function YoutubeScreen() {
    return (
        <MainContainer>
            <HeaderYoutube>
                <BackButton />
                <HeaderText>Videoaulas</HeaderText>
                <Icon />
            </HeaderYoutube>
            <FlatList
                style={{
                    marginTop: 30,
                    marginBottom: 100,
                }}
                data={materias}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.text}
                numColumns={2}
                renderItem={({ item }) => <CardYoutube text={item.text} children={item.image} color={item.color} />}
            />
        </MainContainer>
    );
}
