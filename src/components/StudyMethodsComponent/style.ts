import styled from "styled-components/native";

export const MethodContainer = styled.TouchableOpacity`
    width: 100%;
    height: auto;
    background-color: #D7D7DE;
    border-radius: 5px 5px 10px 10px;
    margin-top: 5px;
`;

export const TextMethod = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_primary};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    font-size: ${({ theme }) => theme.FONTSIZES.medium};
`;

export const TextContinainer = styled.View`
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.tabBar};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ViewSubtitle = styled.View`
    width: 100%;
    height: auto;
    padding: 20px;
`;

export const TextSubtitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_secundary};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    font-size: ${({ theme }) => theme.FONTSIZES.medium};
`;

export const BlueText = styled.Text`
  color: ${({ theme }) => theme.COLORS.primary};
    font-family: ${({ theme }) => theme.FONTS.textButtons};
    font-size: ${({ theme }) => theme.FONTSIZES.medium};
`; 