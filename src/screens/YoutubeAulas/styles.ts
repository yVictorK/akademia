import styled from "styled-components/native";

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;

export const HeaderYoutube = styled.View`
flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_primary};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    font-size: 30px;
    max-width: 50%;
    text-align: center;
`;