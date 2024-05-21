
import { HeaderSingIn } from "@components/SingInHeader";
import {
    ButtonAction,
    CheckBoxText,
    CheckPrivacyPolitycView,
    InputContainer,
    InputContainerView,
    LoginContainer,
    SingUpView,
    TextButtonAction,
    TextContent,
    TextInputContainerView,
    TextTitle
}
    from "./styles";
    import EmailIcon from '../../assets/images/emailIcon.svg';
import LockIcon from '@images/lockIcon.svg';
import ControllerTextInput from "@components/ControllerInputText";
import CheckBox from "@components/CheckBox";
import { useState } from "react";
import { NavigationProps } from "../../types/navigation";
import { AuthOperationName, useEmailPasswordAuth } from "@realm/react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { zodResolver } from '@hookform/resolvers/zod';
import { user, userSchema } from "./signUpSchema";


export function SignUp() {
    const navigation = useNavigation<NavigationProps>();
    const [isChecked, setIsChecked] = useState(false);
    const { register, result } = useEmailPasswordAuth();
    const theme = useTheme();

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

    const signUpUser = (data: user) => {
        register    (data);
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'Home' },
            ]
        }));
    }


    return (
        <LoginContainer>
            <HeaderSingIn />
            <TextTitle>Cadastro</TextTitle>
            <TextContent>Aqui começa a sua caminhada rumo à aprovação.</TextContent>
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
            </InputContainer>
            <SingUpView>
                <CheckPrivacyPolitycView>
                    <CheckBox isChecked={isChecked} onCheck={() => setIsChecked(!isChecked)} />
                    <CheckBoxText>Ao Informar seus dados e concluir seu cadastro, você automaticamente concorda com nossa Política de Privacidade e com os Termos de Uso</CheckBoxText>
                </CheckPrivacyPolitycView>
                <ButtonAction onPress={handleSubmit(signUpUser)} disabled={!isChecked} error={!isChecked}>
                    <TextButtonAction>Cadastre-se</TextButtonAction>
                </ButtonAction>
            </SingUpView>

        </LoginContainer>

    );
}