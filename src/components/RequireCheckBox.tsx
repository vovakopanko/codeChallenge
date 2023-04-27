import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colorList} from '../constants/colors';
import {
  validateEmail,
  validateLength,
  validatePassword,
} from '../utils/validations';

type Props = {
  required: boolean;
  value: string;
};

const RequireCheckBox = ({required, value}: Props) => {
  const isFillCorrect =
    (validateLength(value) && validatePassword(value)) || validateEmail(value);
  return (
    <>
      {required && (
        <View style={field.required}>
          <Text
            style={{
              color: isFillCorrect ? colorList.LOGO_COLOR : colorList.RED,
            }}>
            {isFillCorrect ? 'V' : '*'}
          </Text>
        </View>
      )}
    </>
  );
};

const field = StyleSheet.create({
  required: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
});

export default RequireCheckBox;
