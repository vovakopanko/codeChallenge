import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LogoName from '../components/LogoName';
import CustomButton from '../components/CustomButton';
import {images} from '../constants/images';
import {title} from '../constants/libraryTitle';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../constants/navigateTypes';
import {btnName} from '../constants/btnName';

const AuthPage = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const signInHandler = () => navigation.navigate('SignIn');
  const redirectOnSignUp = () => navigation.navigate('Registration');

  return (
    <>
      <View style={style.imageContainer}>
        <Image source={images.LOGO} style={style.imageSize} />
        <LogoName titleName={title.LOGO_NAME} />
      </View>
      <View style={style.imageContainer}>
        <CustomButton btnName={btnName.SIGN_IN} func={signInHandler} />
        <CustomButton btnName={btnName.SIGN_UP} func={redirectOnSignUp} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 90,
    height: 90,
  },
});

export default AuthPage;
