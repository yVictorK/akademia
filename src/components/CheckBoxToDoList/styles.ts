import styled from "styled-components/native";

export const CheckBoxContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.COLORS.toDoListCheckBox};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  opacity: 0.4;
`;
