import { useNavigation } from "@react-navigation/native";
import ButtonHomeScreen from "../HomeButton";
import { Container, ContainerButton, TextContent, Title } from "./styles";

export function WelcomeContainer() {
    const navigation = useNavigation()
    return (
        <Container>
            <Title>Bem Vindo(a) ao akadêmia</Title>
            <TextContent>Conheça nossa plataforma de estudos totalmente gratuita. Tenha acesso a rotinas e métodos de estudos, além de uma gama de conteúdos para os seus vestibulares!</TextContent>
            <ContainerButton>
                <ButtonHomeScreen title='Entrar' navig='Login'/>
                <ButtonHomeScreen title='Cadastre-se' navig='SignUp'/>
            </ContainerButton>
        </Container>
    );
}