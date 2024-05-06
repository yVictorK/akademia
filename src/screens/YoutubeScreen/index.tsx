import { BackButton } from "../../components/BackButton";
import { HeaderYoutube, HeaderText, MainContainer } from "./styles";
import Icon from '../../assets/images/icon45.svg';
import { CardYoutube } from "../../components/CardsYoutube";
import { FlatList, View } from 'react-native';

const materias = [
    { text: 'Arte', image: 'urlDaImagemDeArte' },
    { text: 'História', image: 'urlDaImagemDeHistoria' },
    { text: 'Geografia', image: 'urlDaImagemDeGeografia' },
    { text: 'Matemática', image: 'urlDaImagemDeMatematica' },
    { text: 'Português', image: 'urlDaImagemDePortugues' },
    { text: 'Física', image: 'urlDaImagemDeFisica' },
    { text: 'Química', image: 'urlDaImagemDeQuimica' },
    { text: 'Biologia', image: 'urlDaImagemDeBiologia' },
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
                renderItem={({ item }) => <CardYoutube text={item.text} image={item.image} />}
            />
        </MainContainer>
    );
}
