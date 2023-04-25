import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validateEmail, validatePassword} from '../utils/validations';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../constants/navigateTypes';

export interface IData {
  id: number;
  placeholder: string;
  onChangeText: (val: string) => void;
  value: string;
  required: boolean;
  isValid?: boolean;
}

export const useAuth = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [webSite, setWebSite] = useState<string>('');
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const isConditionsDone = email.length <= 5 || password.length <= 5;
  const inputData: IData[] = [
    {
      id: 0,
      placeholder: 'First Name:',
      onChangeText: setFirstName,
      value: firstName,
      required: false,
    },
    {
      id: 1,
      placeholder: 'Email Adress:',
      onChangeText: setEmail,
      value: email,
      required: true,
      isValid: validateEmail(email),
    },
    {
      id: 2,
      placeholder: 'Password:',
      onChangeText: setPassword,
      value: password,
      required: true,
      isValid: validatePassword(password),
    },
    {
      id: 3,
      placeholder: 'Website:',
      onChangeText: setWebSite,
      value: webSite,
      required: false,
    },
  ];

  const submitHandler = () => {
    AsyncStorage.getItem(email).then((value: any) => {
      if (!value) {
        AsyncStorage.setItem(
          email,
          JSON.stringify([password, photo, webSite, firstName]),
        );
        navigation.navigate('Home', {email: email});
      } else {
        setError('Error: User Exist');
        setPassword('');
      }
    });
  };

  return {
    photo,
    setPhoto,
    submitHandler,
    inputData,
    isConditionsDone,
    error,
  };
};
