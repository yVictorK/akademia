import { HeaderSingIn } from "../../components/SingInHeader";
import { ButtonAction, ButtonsContainer, InputContainer, InputContainerView, LoginContainer, TextBetweenButtons, TextButtonAction, TextContent, TextForgotPassword, TextInputContainerView, TextSingUp, TextTitle } from "./styles";
import EmailIcon from '../../assets/images/emailIcon.svg'
import LockIcon from '../../assets/images/lockIcon.svg'
import ControllerTextInput from "../../components/ControllerInputText";
import { GoogleLogin } from "../../components/GoogleLoginButton";
import { useEmailPasswordAuth } from "@realm/react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import theme from '../../themes/default'
import { useForm } from "react-hook-form";
import { user, userSchema } from "../../schema/signISchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "react-native";


export function Login() {
    const navigation = useNavigation<NavigationProps>();
    const { logIn, result } = useEmailPasswordAuth();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<user>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });


    const validateLogin = (data: user) => {
        logIn(data);
        if (!result.success) {
            Alert.alert('Email e/ou senha incorreta');
        }
    }


    return (
        <LoginContainer>
            <HeaderSingIn />
            <TextTitle>Login</TextTitle>
            <TextContent>Entre e tenha acesso ao caminho perfeito para a sua aprovação. </TextContent>
            <InputContainer>
                <InputContainerView>
                    <TextInputContainerView>E-mail:</TextInputContainerView>
                    <ControllerTextInput
                        control={control}
                        name="email"
                        placeholder="E-mail"
                    >
                        <EmailIcon width={20} height={20} fill={errors.email ? 'red' : theme.COLORS.text_primary} />
                    </ControllerTextInput>

                </InputContainerView>
                <InputContainerView>
                    <TextInputContainerView>Senha:</TextInputContainerView>
                    <ControllerTextInput
                        control={control}
                        name="password"
                        placeholder="Senha"
                        isPassword={true}
                    >
                        <LockIcon width={20} height={20} fill={errors.password ? 'red' : theme.COLORS.text_primary} />
                    </ControllerTextInput>

                </InputContainerView>
                <TextForgotPassword>Esqueceu a senha? Clique aqui</TextForgotPassword>
            </InputContainer>
            <ButtonsContainer>
                <GoogleLogin />
                <TextBetweenButtons>ou</TextBetweenButtons>
                <ButtonAction onPress={handleSubmit(validateLogin)}>
                    <TextButtonAction>Entrar</TextButtonAction>
                </ButtonAction>
                <TextSingUp onPress={() => navigation.dispatch(CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Home' },
                        { name: 'SignUp' },
                    ]
                }))}>Não possui conta? Cadastre-se.</TextSingUp>
            </ButtonsContainer>
        </LoginContainer >
    );
}