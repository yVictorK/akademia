import { HeaderStudyMethods, HeaderText, MainContainer, BlueText, MethodsView } from "./styles";
import Icon from '../../assets/images/icon45.svg';
import { BackButton } from "../../components/BackButton";
import StudyMethodBox from "../../components/StudyMethodsComponent";
import { ScrollView, View } from "react-native";

const pomodoro = [
    "A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em ",
    <BlueText key="blue-text">períodos de 25 minutos</BlueText>,
    ", separados por ",
    <BlueText key="blue-text2" > breves intervalos.</BlueText >,
];

const revisao = [
    "A ",
    <BlueText key="blue-text3" >Revisão Espaçada </BlueText >,
    "é um método de estudo que envolve a revisão de informações em ",
    <BlueText key="blue-text4" >intervalos de tempo específicos</BlueText >,
    ". Isso é feito para combater a ",
    <BlueText key="blue-text5" >Curva do Esquecimento</BlueText >,
    " e ajudar a mover informações da memória de curto prazo para a memória de longo prazo.",
];
const mapa = [
    "O ",
    <BlueText key="blue-text6">Mapa Mental</BlueText>,
    " é uma técnica visual que representa ideias e conceitos em torno de um conceito central. É uma ",
    <BlueText key="blue-text7">ferramenta de brainstorming visual </BlueText>,
    "que ajuda na estruturação de informações, tornando-a intuitiva e eficaz para a memorização e o aprendizado.",

];

export function StudyMethods() {


    return (
        <MainContainer>
            <HeaderStudyMethods>
                <BackButton />
                <HeaderText>Métodos de estudo</HeaderText>
                <Icon />
            </HeaderStudyMethods>
            <MethodsView>
                <StudyMethodBox title="Pomodoro" content={pomodoro} />
                <StudyMethodBox title="Revisão espaçada" content={revisao} />
                <StudyMethodBox title="Mapa mental" content={mapa} />
            </MethodsView>
        </MainContainer>
    );
}
