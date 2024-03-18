import { BoxContainer, TextBox } from "./styles";

export function ToDoListBox ({props}: any){
    return(
        <BoxContainer>
            <TextBox>{props}</TextBox>
        </BoxContainer>
    );
}
