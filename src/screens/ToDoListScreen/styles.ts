import styled from "styled-components/native";


export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const TextToDoList = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.title};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  color: ${({ theme }) => theme.COLORS.text_primary};
  margin-top: 30px;
`;