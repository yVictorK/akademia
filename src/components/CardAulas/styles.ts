import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    width: 100%;
    border-radius: 10px; 
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 20px;
`;
export const CardImage = styled.Image`
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    width: 40%;
    background-color: #D9D9D9;
    border-radius: 10px;
    height: 80%;
    height: 120px;   
`;

export const TextCard = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.larger};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
    text-align: center;
    padding: 10px;
`;
export const SubtitleCard = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.small};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
    text-align: center;
    padding: 10px;
`;

export const TextView = styled.View`
    align-items: flex-start;
`;




