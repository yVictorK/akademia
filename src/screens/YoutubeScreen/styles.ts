import styled from "styled-components/native";

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;