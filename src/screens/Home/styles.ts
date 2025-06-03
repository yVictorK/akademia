import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;

export const TextHeader = styled.Text`
  margin-top: 10px;
  font-size: 30px;
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  color: ${({ theme }) => theme.COLORS.text_primary};
`;
export const ContainerActivityView = styled.View`
  margin-top: 50px;
`;

export const ContainerActivityText = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.larger};
  font-family: ${({ theme }) => theme.FONTS.contents};
  color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const ViewActitivitys = styled.View`
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  margin-top: 15px;
`;

export const PressableContainer = styled.TouchableOpacity`
    width: 47% ;
    aspect-ratio: 1/0.6;
    border-radius: 15px;
    overflow: hidden;
`;

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const TextContainer = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.larger};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  color: ${({ theme }) => theme.COLORS.text_primary};
  align-self: flex-end;
  margin: 5px 10px;
`;