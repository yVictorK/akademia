import styled from "styled-components/native";


export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 20px;
  gap: 40px
`;

export const HeaderProfile = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.COLORS.text_primary};
  font-family: ${({ theme }) => theme.FONTS.textButtons};
  font-size: 26px;
  text-align: left;
`;
