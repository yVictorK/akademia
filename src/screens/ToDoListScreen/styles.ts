import styled from "styled-components/native";


export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const TextToDoList = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.title};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  color: ${({ theme }) => theme.COLORS.text_primary};
  margin-top: 30px;
  margin-bottom: 30px;
  margin-top: 60px;
`;

export const ButtonAddActivity = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.buttonsCreate};
  padding: 15px;
  width: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const TextAddActivity = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.larger};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const ListView = styled.View`
  width: 100%;
  height: auto;
  padding: 20px 0px;
  margin-bottom: 330px;
  border-radius: 15px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ModalView = styled.View`
    margin: 20px;
    background-color: white;
    border-radius: 20px;
    padding: 35px;
    align-items: center;
    width: 80%;
    gap: 20px;
    background-color: ${({ theme }) => theme.COLORS.background};
`;

export const TextModal = styled.Text`
      font-size: ${({ theme }) => theme.FONTSIZES.larger};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  color: ${({ theme }) => theme.COLORS.text_primary};

`;

export const ButtonsView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
    width: 100%;
`;

export const CancelButton = styled.TouchableOpacity`
    padding: 15px 15px;
    background-color: ${({ theme }) => theme.COLORS.error};
    border-radius: 15px;
`;

export const AddButton = styled.TouchableOpacity`
    padding: 15px 15px;
    background-color: ${({ theme }) => theme.COLORS.buttonsCreate};
    border-radius: 15px;
`;

export const TextButtons = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.medium};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    color: ${({ theme }) => theme.COLORS.text_primary};

`;

export const TextInputModal = styled.TextInput`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    color: ${({ theme }) => theme.COLORS.text_primary};
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.text_secundary};
`;

export const ErrorText = styled.Text`
    color: ${({ theme }) => theme.COLORS.error};
    font-size: ${({ theme }) => theme.FONTSIZES.small};
    font-family: ${({ theme }) => theme.FONTS.contents};
    margin-left: 10px;
`;