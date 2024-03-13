import { TouchableOpacity } from "react-native";
import { CheckBoxContainer} from "./styles";
import Checked from '../../assets/images/Checked.svg'


interface CheckBoxProps{
    isChecked: boolean;
    onCheck: any;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onCheck }) => (
    <TouchableOpacity onPress={onCheck}>
      <CheckBoxContainer>
        {isChecked && <Checked width={18} height={18} />}
      </CheckBoxContainer>
    </TouchableOpacity>
  );

  export default CheckBox;