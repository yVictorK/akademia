import styled from "styled-components/native";

export const GoogleButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${({theme}) => theme.COLORS.text_primary };
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 20px;
    border-radius: 30px;

`;

export const GoogleButtonText = styled.Text`
    color: ${({theme}) => theme.COLORS.text_secundary};
    font-family: ${({theme}) => theme.FONTS.contents};
    font-size: 16px;
`;
