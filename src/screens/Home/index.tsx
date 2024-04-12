import { Logo } from "../../components/Logo";
import { WelcomeContainer } from "../../components/WelcomeContainer";
import { HomeContainer } from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";

const image = require('../../assets/images/backgroundHomeImage.png');

export function Home() {
    return (
            <HomeContainer source={image}>
                <Logo />
                <WelcomeContainer />
            </HomeContainer>
    );
}