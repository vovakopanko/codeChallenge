import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import {useAuth} from '../../hooks/useAuth';
import SubTitle from './SubTitle';
import Avatar from './Avatar';
import Title from '../Title';
import {title} from '../../constants/libraryTitle';
import {colorList} from '../../constants/colors';
import {validateEmail, validatePassword} from '../../utils/validations';

const SignUp = () => {
  const {
    submitHandler,
    inputData,
    isConditionsDone,
    photo,
    setPhoto,
    error,
    email,
    password,
  } = useAuth();
  const disabled =
    isConditionsDone && !validatePassword(email) && !validateEmail(password);
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={behavior}
          style={styles.keyboardContainer}>
          <View>
            <Title title={title.PROFILE_CREATION} />
            <SubTitle />
            <Avatar setPhoto={setPhoto} photo={photo} />
            <View style={styles.position}>
              {inputData.map(input => (
                <CustomInput
                  key={input.id}
                  placeholder={input.placeholder}
                  onChangeText={input.onChangeText}
                  value={input.value}
                  required={input.required}
                />
              ))}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Text style={styles.errorMessage}>{error}</Text>
      <View style={styles.submitContainer}>
        <CustomButton
          btnName="Submit"
          func={submitHandler}
          disabled={disabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  position: {
    alignItems: 'center',
  },
  submitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  galeryBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  errorMessage: {
    color: colorList.RED,
    fontSize: 18,
    textAlign: 'center',
  },
  keyboardContainer: {
    flex: 1,
  },
});

export default SignUp;
