import { BackButton } from "../../components/BackButton";
import { HeaderYoutube, HeaderText, MainContainer, TextView } from "./styles";
import Icon from '../../assets/images/icon45.svg';
import { RouteProp, useRoute } from "@react-navigation/native";
import { routes } from "types/navigation";
import { CardAulas } from "../../components/CardAulas";


export function YoutubeAulas() {
    const route = useRoute<RouteProp<routes, 'YoutubeAulas'>>();
    const { text } = route.params;

    return (
        <MainContainer>
            <HeaderYoutube>
                <BackButton />
                <HeaderText>Aulas de {text}</HeaderText>
                <Icon />
            </HeaderYoutube>
            <TextView>
                <CardAulas text={"Aula de " + text} image={text} />
                <CardAulas text={"Aula de " + text} image={text} />
                <CardAulas text={"Aula de " + text} image={text} />
            </TextView>

        </MainContainer>
    );
}
