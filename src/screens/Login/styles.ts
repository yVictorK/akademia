import styled from "styled-components/native";


export const LoginContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;

export const TextTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.big};
  font-family: ${({ theme }) => theme.FONTS.primaryTitles};
  color: ${({ theme }) => theme.COLORS.text_primary};
  margin-top: 30px;
`;

export const TextContent = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.larger};
  font-family: ${({ theme }) => theme.FONTS.contents};
  color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const InputContainer = styled.View`
    gap: 25px;
    margin: 50px 0px;

`;

export const TextForgotPassword = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.small};
  font-family: ${({ theme }) => theme.FONTS.contents};
  color: ${({ theme }) => theme.COLORS.text_primary};
  align-self: flex-end;
  text-decoration-line: underline;
`;

export const ButtonsContainer = styled.View`
  gap: 15px;
`;

export const ButtonAction = styled.TouchableOpacity`
    border-radius: 20px;
    padding: 15px;
    background-color: ${({ theme }) => theme.COLORS.primary};
    justify-content: center;
    align-items: center;
    border-radius: 30px;

`;

export const TextButtonAction = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_primary};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    font-size: ${({ theme }) => theme.FONTSIZES.larger};
`;

export const TextBetweenButtons = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.larger};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
    text-align: center;
`;

export const InputContainerView = styled.View`
  gap: 5px;
`;

export const TextInputContainerView = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.medium};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const SingUpView = styled.View`
  margin-top: 30%;
  gap: 50px;
`;


export const TextSingUp = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.small};
  font-family: ${({ theme }) => theme.FONTS.contents};
  color: ${({ theme }) => theme.COLORS.text_primary};
  align-self: center;
  text-decoration-line: underline;
`;