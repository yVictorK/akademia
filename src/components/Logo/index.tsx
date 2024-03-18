
import Icon from '../../assets/images/icon.svg'
import { Container, TextLogo } from './styles'

export function Logo() {
    return (
        <Container>
            <Icon fill='#29A5DA' width={120} height={145} />
            <TextLogo>akademia</TextLogo>
        </Container>
    );
}