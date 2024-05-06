import styled from "styled-components/native";

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
    background-color: ${({theme}) => theme.COLORS.background};
`;

export const TextModal = styled.Text`
      font-size: ${({ theme }) => theme.FONTSIZES.larger};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  color: ${({ theme }) => theme.COLORS.text_primary};

`;

export const ButtonsView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const CancelButton = styled.TouchableOpacity`
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.COLORS.error};
    border-radius: 15px;
`;

export const AddButton = styled.TouchableOpacity`
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.COLORS.buttonsCreate};
    border-radius: 15px;
`;

export const TextButtons = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.medium};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    color: ${({ theme }) => theme.COLORS.text_primary};

`;


export const ErrorText = styled.Text`
    color: ${({ theme }) => theme.COLORS.error};
    font-size: ${({ theme }) => theme.FONTSIZES.small};
    font-family: ${({ theme }) => theme.FONTS.contents};
    margin-left: 10px;
`;