import React, { useCallback, useState } from "react";
import DeleteIcon from "../../assets/images/deleteIcon.svg";
import { BoxContainer, CheckBoxContainer, TextBox } from "./styles";
import { TouchableOpacity, View } from "react-native";
import Checked from "../../assets/images/TaskCompleted.svg";
import EditIcon from '../../assets/images/edit.svg';
import { BSON } from "realm";

interface CheckBoxProps {
  isChecked: boolean;
  onCheck: any;
  itemID: BSON.ObjectId;
  toggleItemIsCompleted: () => {};
}

const CheckBoxToDoList: React.FC<CheckBoxProps> = ({ isChecked, onCheck, toggleItemIsCompleted }) => {
  const [checked, setChecked] = useState(isChecked);
  const handleCheck = () => {
    setChecked(!checked);
    onCheck(!checked);
    toggleItemIsCompleted();
  };

  return (
    <TouchableOpacity onPress={handleCheck}>
      <CheckBoxContainer style={{
        opacity: checked ? 0.8 : 0.4,
      }}>
        {checked && <Checked width={30} height={30} />}
      </CheckBoxContainer>
    </TouchableOpacity>
  );
};

export function ToDoListBox({ props, getItemId, getItemIdToEdit, itemID, toggleItemIsCompleted, itemState }: any) {
  return (
    <BoxContainer>
      <CheckBoxToDoList isChecked={itemState} onCheck={() => { }} itemID={itemID} toggleItemIsCompleted={toggleItemIsCompleted} />
      <TextBox>{props}</TextBox>
      <View style={{flexDirection: 'row', gap : 10}}>
        <EditIcon width={25} height={25} onPress={getItemIdToEdit} />
        <DeleteIcon width={25} height={25} onPress={getItemId} />
      </View>
    </BoxContainer>
  );
}

