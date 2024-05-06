import styled from "styled-components/native";


export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 25px;
`;

export const HeaderStudyMethods = styled.View`
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

export const BlueText = styled.Text`
  color: ${({ theme }) => theme.COLORS.primary};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    font-size: ${({ theme }) => theme.FONTSIZES.small};
`; 

export const MethodsView = styled.View`
  margin-top: 50px;
  
`;