import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { CheckBoxContainer } from "./styles";
import Checked from "../../assets/images/TaskCompleted.svg";

interface CheckBoxProps {
  isChecked: boolean;
  onCheck: any;
}

const CheckBoxToDoList: React.FC<CheckBoxProps> = ({ isChecked, onCheck }) => {
  const [checked, setChecked] = useState(isChecked);
  const handleCheck = () => {
    setChecked(!checked);
    onCheck(!checked); 
  };

  return (
    <TouchableOpacity onPress={handleCheck}>
      <CheckBoxContainer style={{
        opacity: checked? 0.8 : 0.4,
      }}>
        {checked && <Checked width={30} height={30} />}
      </CheckBoxContainer>
    </TouchableOpacity>
  );
};

export default CheckBoxToDoList;
