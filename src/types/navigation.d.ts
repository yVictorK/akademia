import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type routes = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  MainScreen: undefined;
  ToDoList: undefined;
  MainScreenTab: undefined
};

export type NavigationProps = NativeStackNavigationProp<routes>;
