import styled from "styled-components/native";

export const Container = styled.View`
    flex: 3;
    padding: 40px;
    align-items: center;
    justify-content: center;
`;

export const TextLogo = styled.Text`
    font-size: 56px;
    font-family: ${ ({theme}) => theme.FONTS.primaryTitles};
    color: ${({ theme }) => theme.COLORS.text_primary};
    margin: 10px;
`;