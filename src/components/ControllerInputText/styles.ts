import styled from "styled-components/native";


export const TextInputController = styled.TextInput`
    font-size: ${({ theme }) => theme.FONTSIZES.small};
    font-family: ${({ theme }) => theme.FONTS.contents};
    color: ${({ theme }) => theme.COLORS.text_primary};
    width: 100%;
    margin-left: 20px;
`;

export const Container = styled.View<{ error?: boolean }>`
    flex-direction: column;
    gap: 5px;
`;
export const ChildrenContainer = styled.View<{ error?: boolean }>`
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    padding: 20px 30px;
    color: ${({ theme }) => theme.COLORS.text_primary};
    border-color: ${({ error }) => (error ? 'red' : 'transparent')};
    border-width: ${({ error }) => (error ? '1px' : '0')};
    width: 100%;
    height: 70px;
    border-radius: 30px;
    align-items: center;
`;

export const ErrorText = styled.Text`
    color: ${({ theme }) => theme.COLORS.error};
    font-size: ${({ theme }) => theme.FONTSIZES.small};
    font-family: ${({ theme }) => theme.FONTS.contents};
    margin-left: 10px;
`;

