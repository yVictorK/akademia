import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 40px;
    align-items: center;
    justify-content: center;
`;

export const TextLogo = styled.Text`
    font-size: 36px;
    font-family: ${ ({theme}) => theme.FONTS.primaryTitles};
    color: ${({ theme }) => theme.COLORS.text_primary};
    margin: 10px;
`;