import styled from "styled-components/native";


export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
  gap: 30px
`;

export const HeaderProfile = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.COLORS.text_primary};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  font-size: 25px;
  max-width: 70%;
  text-align: center;
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
    align-items: flex-start;
`;

export const TextModal = styled.Text`
      font-size: ${({ theme }) => theme.FONTSIZES.larger};
  font-family: ${({ theme }) => theme.FONTS.contents};
  color: ${({ theme }) => theme.COLORS.text_primary};


`;

export const ButtonsView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
    gap: 20px;
`;

export const CancelButton = styled.TouchableOpacity`
    padding: 15px ;
    background-color: ${({ theme }) => theme.COLORS.primary};
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    width: 120px;
`;

export const AddButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${({ theme }) => theme.COLORS.primary};
    border-radius: 15px;
    width: 120px;
    justify-content: center;
    align-items: center;
`;

export const TextButtons = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.small};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};

`;

export const TextInputModal = styled.TextInput`
    width: 100%;
    background-color: #29212C;
    color: ${({ theme }) => theme.COLORS.text_primary};
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const ErrorText = styled.Text`
    color: ${({ theme }) => theme.COLORS.error};
    font-size: ${({ theme }) => theme.FONTSIZES.small};
    font-family: ${({ theme }) => theme.FONTS.contents};
    margin-left: 10px;
`;