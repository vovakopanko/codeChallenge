import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {validateEmail, validatePassword} from '../utils/validations';

type Props = {
  required: boolean;
  placeholder: string;
  isFocus: boolean;
  value: string;
};

const ErrorNotice = ({required, placeholder, isFocus, value}: Props) => {
  const isSequreType = placeholder === 'Password:';
  const isEmail = placeholder === 'Email Adress:';
  return (
    <>
      {required && isFocus && (
        <Text style={error.text}>Please Input {placeholder}</Text>
      )}
      {isEmail && !validateEmail(value) && !isFocus && value.length > 0 && (
        <Text style={error.text}>Invalid email, example: test@mail.com</Text>
      )}
      {isSequreType &&
        !validatePassword(value) &&
        !isFocus &&
        value.length > 0 && (
          <Text style={error.text}>Invalid pass, example: 12345Aa</Text>
        )}
    </>
  );
};

const error = StyleSheet.create({
  text: {
    color: 'red',
    margin: 2,
    position: 'absolute',
    bottom: 0,
  },
});

export default ErrorNotice;
