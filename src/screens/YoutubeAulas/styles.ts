import styled from "styled-components/native";

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px 25px 0 25px;
`;

export const HeaderYoutube = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
`;

export const HeaderText = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_primary};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    font-size: 30px;
    max-width: 70%;
    text-align: center;
`;

export const TextView = styled.View`
  margin-top: 30px;
  gap: 10px;

`;