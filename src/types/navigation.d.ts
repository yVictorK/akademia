import Realm from 'realm'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type routes = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ToDoList: undefined;
  HomeTab: undefined;
  StudyMethods: undefined;
  YoutubeScreen: undefined;
  YoutubeAulas: { text?: string, duration?: 'any' | 'short' | 'medium' | 'long' };
  FilterYoutubeVideos: { currentTitle: string };
  notices: undefined;
  RenderFlashCard: { itemID: string };
};

export type NavigationProps = NativeStackNavigationProp<routes>;
