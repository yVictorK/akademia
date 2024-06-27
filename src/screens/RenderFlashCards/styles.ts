import styled from "styled-components/native";


export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
  gap: 50px;
`;

export const HeaderProfile = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.COLORS.text_primary};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  font-size: 25px;
  max-width: 70%;
  text-align: center;
`;