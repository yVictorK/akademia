import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface CardImageProps extends TouchableOpacityProps {
    color?: string;
}

export const CardContainer = styled.TouchableOpacity`
 background-color: ${({theme}) => theme.COLORS.tabBar};
 width: 45%;
 border-radius: 10px;
 height: 200px;
 margin: 2.5%;
`;
export const CardImage = styled.View<CardImageProps>`
     background-color: ${props => props.color};
     border-radius: 10px;
     height: 80%;
     align-items: center;
     justify-content: center;
 
 `;

export const TextCard = styled.Text`
     font-size: ${({ theme }) => theme.FONTSIZES.larger};
     font-family: ${({ theme }) => theme.FONTS.contents};
     color: ${({ theme }) => theme.COLORS.text_primary};
     text-align: center;
     padding: 10px;
 `;


