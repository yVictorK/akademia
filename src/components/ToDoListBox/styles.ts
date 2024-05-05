import styled from "styled-components/native";

export const BoxContainer = styled.View`
    width: 100%;
    border-radius: 15px;
    padding: 15px;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.inputBackground};
    margin-bottom: 15px;
`;

export const TextBox = styled.Text`
    color: white;
    font-size: 16px;
`;