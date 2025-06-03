import styled from "styled-components/native";

export const HomeButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.text_primary};
    max-width: 300px;
    width: 160px;
    padding: 10px 20px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_secundary};
    font-family: ${({theme}) => theme.FONTS.textButtons};
    font-size: ${({theme}) => theme.FONTSIZES.medium};
`;