import { MainContainer, PressableContainer, TextContainer, TextHeader, ViewActitivitys, ImageContainer, ContainerActivityView, ContainerActivityText } from "./styles";
import { MainHeader } from "../../components/MainHeader";
import AppCalendar from "../../components/CalendarMain";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";

export function MainScreen() {
    const navigation = useNavigation<NavigationProps>();
    return (
        <MainContainer>
            <MainHeader />
            <TextHeader>Olá, Estudante!</TextHeader>
            <AppCalendar />
            <ContainerActivityView>
                <ContainerActivityText>O que deseja fazer agora?</ContainerActivityText>
                <ViewActitivitys>
                    <PressableContainer 
                    onPress={() => navigation.navigate('ToDoList')}
                    >
                        <ImageContainer
                            source={require('../../assets/images/atividades.png')}
                        >
                            <TextContainer>Atividades</TextContainer>
                        </ImageContainer>
                    </PressableContainer>
                    <PressableContainer>
                        <ImageContainer
                            source={require('../../assets/images/editais.png')}
                        >
                            <TextContainer>Editais</TextContainer>
                        </ImageContainer>
                    </PressableContainer>
                    <PressableContainer>
                        <ImageContainer
                            source={require('../../assets/images/aulas.png')}
                        >
                            <TextContainer>Aulas</TextContainer>
                        </ImageContainer>
                    </PressableContainer>
                    <PressableContainer>
                        <ImageContainer
                            source={require('../../assets/images/metodos.png')}
                        >
                            <TextContainer>Métodos</TextContainer>
                        </ImageContainer>
                    </PressableContainer>
                </ViewActitivitys>
            </ContainerActivityView>
        </MainContainer>
    );
}