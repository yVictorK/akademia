import styled from "styled-components/native";

export const CheckBoxContainer = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${({theme}) => theme.COLORS.checkBoxBackground};
  justify-content: center;
  align-items: center;
`;
