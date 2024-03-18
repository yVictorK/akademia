import React from 'react';
import Seta from '../../assets/images/seta.svg';
import { Button } from './styles';
import { useNavigation } from '@react-navigation/native';


export function BackButton(){
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.goBack()}>
        <Seta />
    </Button>
);
}


