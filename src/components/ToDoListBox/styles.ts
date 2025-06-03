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
    justify-content: space-between;
`;

export const TextBox = styled.Text`
    color: white;
    font-size: 16px;
    max-width: 60%;
`;

export const CheckBoxContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.COLORS.toDoListCheckBox};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  opacity: 0.4;
`;
