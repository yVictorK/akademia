import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

export const VIDEO_HEIGHT = 200;  // Ajuste para usar um valor fixo como altura
const { width } = useWindowDimensions();

export const CardContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    width: 100%;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 20px;
    height: ${VIDEO_HEIGHT}px;  // Definindo altura fixa para o container
`;

export const CardImage = styled.Image`
    background-color: #D9D9D9;
    border-radius: 10px;
    width: 40%;
    height: 100%;  // Ajuste para utilizar a altura total do container
`;

export const TextContainer = styled.View`
    width: 58%;  // Ajustando a largura para deixar espaço para a imagem
    align-items: flex-start;
`;

export const TextCard = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.larger};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
    text-align: left;  // Ajuste para alinhar o texto à esquerda
`;

export const SubtitleCard = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.small};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
    text-align: left;  // Ajuste para alinhar o texto à esquerda
`;
