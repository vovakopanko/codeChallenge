import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colorList} from '../constants/colors';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../constants/navigateTypes';
import {images} from '../constants/images';
import {btnName} from '../constants/btnName';

const Home = (data: any) => {
  const [state, setState] = useState([]);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const userName = data.route.params.email.split('@')[0];
  const goToTopStack = () =>
    navigation.reset({
      index: 0,
      routes: [{name: 'Auth'}],
    });
  useEffect(() => {
    AsyncStorage.getItem(data.route.params.email).then((value: any) => {
      return setState(JSON.parse(value));
    });
  }, [data.route.params.email]);

  return (
    <>
      <View style={styles.userInfoContainer}>
        <Text style={styles.title}>Hello, {userName}!</Text>
        <Text style={styles.subTitle}>
          Your super-awesome portfolio has been successfully submited! The
          preview below is what the community will see!
        </Text>
        <View style={styles.imageContainer}>
          {state[1] ? (
            <Image source={{uri: state[1]}} style={styles.imageBlock} />
          ) : (
            <Image source={images.USER} style={styles.imageBlock} />
          )}
        </View>
        <View style={styles.aboutUserField}>
          {state[2] && <Text style={styles.userInfoField}>{state[2]}</Text>}
          {state[3] && <Text style={styles.userInfoField}>{state[3]}</Text>}
          {data.route.params.email && (
            <Text style={styles.userInfoField}>{data.route.params.email}</Text>
          )}
        </View>
      </View>
      <View style={styles.btnStyle}>
        <CustomButton btnName={btnName.SIGN_OUT} func={goToTopStack} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  imageBlock: {
    width: 150,
    height: 200,
    borderRadius: 20,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  placeHolder: {
    justifyContent: 'center',
    textAlign: 'center',
    color: colorList.BLACK,
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 20,
  },
  userInfoContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 31,
    fontWeight: 'bold',
  },
  aboutUserField: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoField: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
