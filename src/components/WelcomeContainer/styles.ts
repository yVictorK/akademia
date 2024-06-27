import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.primary};
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 50px 50px 0px 0px;
    padding: 50px 25px;
    gap: 30px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.title};
    font-family: ${({ theme }) => theme.FONTS.primaryTitles};
    color: ${({ theme }) => theme.COLORS.text_primary};
    width: 60%;
`;

export const TextContent = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.medium};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const ContainerButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;
`;