import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IData} from './useAuth';
import {validateEmail, validatePassword} from '../utils/validations';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../constants/navigateTypes';

export const useSignIn = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isConditionsDone = email.length <= 5 || password.length <= 5;
  const [error, setError] = useState<string | null>('');
  const inputData: IData[] = [
    {
      id: 0,
      placeholder: 'Email Adress:',
      onChangeText: setEmail,
      value: email,
      required: true,
      isValid: validateEmail(email),
    },
    {
      id: 1,
      placeholder: 'Password:',
      onChangeText: setPassword,
      value: password,
      required: true,
      isValid: validatePassword(password),
    },
  ];

  const loginHandler = () => {
    AsyncStorage.getItem(email).then((value: any) => {
      if (value && [...JSON.parse(value)][0] === password) {
        navigation.navigate('Home', {email: email});
        setError('');
      } else {
        setError('Incorrect password or email');
        setPassword('');
      }
    });
  };

  const registrationHandler = () => {
    navigation.navigate('Registration');
  };

  return {
    error,
    inputData,
    loginHandler,
    isConditionsDone,
    registrationHandler,
  };
};
