  import { NativeStackNavigationProp } from '@react-navigation/native-stack';

  export type routes = {
    Splash: any;
    Welcome: any;
    Login: any;
    SignUp: any;
    ToDoList: any;
    HomeTab: any;
    StudyMethods: any;
    YoutubeScreen: any;
    YoutubeAulas: { text: string };
  };

  export type NavigationProps = NativeStackNavigationProp<routes>;
