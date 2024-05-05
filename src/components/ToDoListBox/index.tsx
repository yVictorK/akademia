import React from "react";
import CheckBoxToDoList from "../CheckBoxToDoList";
import { BoxContainer, TextBox } from "./styles";

export function ToDoListBox({ props }: any) {
  return (
    <BoxContainer>
      <CheckBoxToDoList isChecked={false} onCheck={() => {}} />
      <TextBox>{props}</TextBox>
    </BoxContainer>
  );
}
