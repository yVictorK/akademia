import { MainContainer, PressableContainer, TextContainer, TextHeader, ViewActitivitys, ImageContainer, ContainerActivityView, ContainerActivityText } from "./styles";
import { MainHeader } from "@components/MainHeader";
import AppCalendar from "@components/CalendarMain";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { useWindowDimensions } from "react-native";
import { realmContext } from "@models/RealmContext";
import { UserSchema } from "@models/userSchema";
import { useUser } from "@realm/react";

const { useQuery, useRealm } = realmContext;

export function Home() {

    const user = useUser();
    const userData = useQuery(UserSchema).filtered("userId == $0", user.id)

    const navigation = useNavigation<NavigationProps>();
    return (
        <MainContainer>
            <MainHeader />
            <TextHeader>{'Olá, '+ userData[0].name?? 'Estudante'}</TextHeader>
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
                    <PressableContainer onPress={() => navigation.navigate('notices')}>
                        <ImageContainer
                            source={require('../../assets/images/editais.png')}
                        >
                            <TextContainer>Editais</TextContainer>
                        </ImageContainer>
                    </PressableContainer>
                    <PressableContainer
                        onPress={() => navigation.navigate('YoutubeScreen')}
                    >
                        <ImageContainer
                            source={require('../../assets/images/aulas.png')}
                        >
                            <TextContainer>Aulas</TextContainer>
                        </ImageContainer>
                    </PressableContainer>
                    <PressableContainer onPress={() => navigation.navigate('StudyMethods')}>
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