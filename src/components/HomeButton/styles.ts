import styled from "styled-components/native";

export const HomeButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.text_primary};
    padding: 10px 0px;
    width: 170px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_secundary};
    font-family: ${({theme}) => theme.FONTS.textButtons};
    font-size: ${({theme}) => theme.FONTSIZES.medium};
`;