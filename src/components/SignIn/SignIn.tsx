import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import Title from '../Title';
import {title} from '../../constants/libraryTitle';
import {useSignIn} from '../../hooks/useSignIn';
import {colorList} from '../../constants/colors';

const SignIn = () => {
  const {
    inputData,
    loginHandler,
    registrationHandler,
    isConditionsDone,
    error,
  } = useSignIn();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardContainer}>
      <View style={styles.container}>
        <View style={styles.positionContent}>
          <Title title={title.LOGIN} />

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
        <Text style={styles.errorMessage}>{error}</Text>
        <View style={styles.submitContainer}>
          <CustomButton
            btnName="Login"
            func={loginHandler}
            disabled={isConditionsDone}
          />
          <CustomButton btnName="Registararion" func={registrationHandler} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  positionContent: {
    flex: 1,
    justifyContent: 'center',
  },
  position: {
    alignItems: 'center',
  },
  submitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default SignIn;
