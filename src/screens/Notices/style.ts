import styled, { useTheme } from "styled-components/native";

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
  gap: 25px;
`;

export const TitleNotices = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.contents};
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.text_primary};
`;

export const NoticesButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.text_primary};
    padding: 5px 10px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    width: 90px;
`;

export const NoticesButtonText = styled.Text`
    font-size: ${({ theme }) => theme.FONTSIZES.larger};
    color: ${({ theme }) => theme.COLORS.text_secundary};
    font-family: ${({ theme }) => theme.FONTS.contents};
`;
