import styled from "styled-components/native";
import theme from '../../themes/default'


export const LoginContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;

export const TextTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.big};
  font-family: ${({ theme }) => theme.FONTS.primaryTitles};
  color: ${({ theme }) => theme.COLORS.text_primary};
  margin-top: 5%;
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

export const ButtonAction = styled.TouchableOpacity<{ error?: boolean }>`
    border-radius: 30px;
    padding: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${({ error }) => (error ? theme.COLORS.inputText : theme.COLORS.primary )};
    
`;

export const TextButtonAction = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_primary};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    font-size: ${({ theme }) => theme.FONTSIZES.larger};
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
  margin-top: 50px;
  gap: 50px;
`;

export const CheckBoxText = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.tiny};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const CheckPrivacyPolitycView = styled.View`
  flex-direction: row;
  gap: 10px;

`;
