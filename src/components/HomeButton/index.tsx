import { useNavigation } from '@react-navigation/native';
import { routes, NavigationProps } from '../../types/navigation';

import { HomeButton, TextButton } from './styles';

interface ButtonProps {
  title: string;
  navig: 'Login' | 'SignUp'; 
}

const ButtonHomeScreen: React.FC<ButtonProps> = ({ title, navig }) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <HomeButton onPress={() => navigation.navigate(navig)}>
      <TextButton>{title}</TextButton>
    </HomeButton>
  );
}

export default ButtonHomeScreen;
