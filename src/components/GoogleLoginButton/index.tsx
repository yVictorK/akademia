import { GoogleButtonContainer, GoogleButtonText } from "./styles";
import ArrowRight from '../../assets/images/arrowRight.svg'
import GoogleIcon from '../../assets/images/logoGoogle.svg'

export function GoogleLogin(){
    return(
        <GoogleButtonContainer>
            <GoogleIcon width={40}/>
            <GoogleButtonText>Continue com o google</GoogleButtonText>
            <ArrowRight width={40}/>
        </GoogleButtonContainer>
    );
}