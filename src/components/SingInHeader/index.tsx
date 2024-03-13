import { BackButton } from "../BackButton";
import Icon from '../../assets/images/icon.svg'
import { HeaderContainer } from "./styles";

export function HeaderSingIn() {
    return (
        <HeaderContainer>
            <BackButton />
            <Icon width={45} height={45} />
        </HeaderContainer>
    );
}