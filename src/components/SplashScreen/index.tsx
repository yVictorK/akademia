import LottieView from 'lottie-react-native';
import React from 'react';
import { ContainerSplash } from './styles';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types/navigation';

export interface SplashScreenProps {

}

export const SplashScreen = ({ onAnimationFinish }) => {
    return (
      <ContainerSplash>
        <LottieView
          style={{
            width: '100%',
            height: '100%',
          }}
          source={require('../../assets/Alternative.json')}
          autoPlay={true}
          loop={false}
          resizeMode='center'
          onAnimationFinish={onAnimationFinish}
        />
      </ContainerSplash>
    );
  }
  
