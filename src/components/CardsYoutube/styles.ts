import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    width: 45%;
    border-radius: 10px;
    height: 200px;
    margin: 2.5%;
    
`;
export const CardImage = styled.Image`
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    width: 100%;
    background-color: #D9D9D9;
    border-radius: 10px;
    height: 80%;
`;

export const TextCard = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.larger};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
    text-align: center;
    padding: 10px;
`;


