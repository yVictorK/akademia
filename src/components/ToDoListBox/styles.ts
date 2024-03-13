import styled from "styled-components/native";

export const BoxContainer = styled.View`
    width: 100%;
    border-radius: 30px;
    padding: 15px;
    background-color: ${({theme}) => theme.COLORS.checkBoxBackground};
`;

export const TextBox = styled.Text`
    color: white;
    font-size: 16px;
`;