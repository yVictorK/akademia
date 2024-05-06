import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type routes = {
  Splash: any;
  Home: any;
  Login: any;
  SignUp: any;
  MainScreen: any;
  ToDoList: any;
  MainScreenTab: any;
  StudyMethods: any;
  YoutubeScreen: any;
};

export type NavigationProps = NativeStackNavigationProp<routes>;
