
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
import { useEmailPasswordAuth } from "@realm/react";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { zodResolver } from '@hookform/resolvers/zod';
import { user, userSchema } from "./signUpSchema";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";


export function SignUp() {

  const { navigate } = useNavigation<NavigationProps>();
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
      confirmPassword: '',
    },
  });

  const signUpUser = (data: user) => {
    register(data);
    navigate('Welcome');
  }


  return (
    <SafeAreaView style={{ flexGrow: 1, backgroundColor: '#241D26' }}>
      <ScrollView>
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
            <InputContainerView>
              <TextInputContainerView>Senha:</TextInputContainerView>
              <ControllerTextInput
                control={control}
                name='confirmPassword'
                placeholder="Senha"
                isPassword={true}
              >
                <LockIcon width={20} height={20} fill={errors.confirmPassword ? 'red' : theme.COLORS.text_primary} />
              </ControllerTextInput>

            </InputContainerView>
          </InputContainer>
          <SingUpView>
            <ButtonAction onPress={handleSubmit(signUpUser)} >
              <TextButtonAction>Cadastre-se</TextButtonAction>
            </ButtonAction>
          </SingUpView>

        </LoginContainer>
      </ScrollView>
    </SafeAreaView>

  );
}