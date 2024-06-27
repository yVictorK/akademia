import React, { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEmailPasswordAuth } from "@realm/react";

import { HeaderSingIn } from "@components/SingInHeader";
import ControllerTextInput from "@components/ControllerInputText";
import { GoogleLogin } from "@components/GoogleLoginButton";
import { user, userSchema } from "./signISchema";
import { NavigationProps, routes } from "../../types/navigation";

import {
  ButtonAction,
  ButtonsContainer,
  InputContainer,
  InputContainerView,
  LoginContainer,
  TextBetweenButtons,
  TextButtonAction,
  TextContent,
  TextForgotPassword,
  TextInputContainerView,
  TextSingUp,
  TextTitle
} from "./styles";

import EmailIcon from '@images/emailIcon.svg';
import LockIcon from '@images/lockIcon.svg';
import theme from '@themes/default';

export function Login() {
  const { navigate } = useNavigation<NavigationProp<routes>>();
  const { logIn, result } = useEmailPasswordAuth();
  const [EmailError, setEmailError] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
    watch
  } = useForm<user>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  useEffect(() => {
    if (watchEmail) {
      clearErrors('email');
      setEmailError(false);
    }
  }, [watchEmail, clearErrors]);

  useEffect(() => {
    if (watchPassword) {
      clearErrors('password');
      if (EmailError) {
        clearErrors('email');
        setEmailError(false);
      }
    }
  }, [watchPassword, clearErrors, EmailError]);

  useEffect(() => {
    if (loginAttempted && result && result.error) {
      if (result.error.message === 'Error: unauthorized') {
        setError('email', { type: 'manual', message: 'E-mail ou senha incorretos' });
        setValue('password', '');
        setEmailError(true);
      } else {
        Alert.alert("Ocorreu um erro", result.error.message);
      }
    }
  }, [result, setError, setValue, loginAttempted]);

  const validateLogin = async (data: user) => {
    await logIn(data);
    setLoginAttempted(true); 
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <LoginContainer>
          <HeaderSingIn />
          <TextTitle>Login</TextTitle>
          <TextContent>Entre e tenha acesso ao caminho perfeito para a sua aprovação.</TextContent>
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
            <TextSingUp onPress={() => navigate('SignUp')}>Não possui conta? Cadastre-se.</TextSingUp>
          </ButtonsContainer>
        </LoginContainer >
      </ScrollView>
    </SafeAreaView>
  );
}
