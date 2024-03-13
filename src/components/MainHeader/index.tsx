import Icon from '../../assets/images/icon.svg'
import JingleIcon from '../../assets/images/jingleIcon.svg'
import { HeaderContainer } from "./styles";

export function MainHeader() {
    return (
        <HeaderContainer>
            <JingleIcon />
            <Icon width={45} height={45} />
        </HeaderContainer>
    );
}