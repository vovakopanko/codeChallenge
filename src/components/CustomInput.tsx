import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import {colorList} from '../constants/colors';

interface Props {
  placeholder: string;
  onChangeText: (str: string) => void;
  value: string;
  required: boolean;
}

const CustomInput = ({placeholder, onChangeText, value, required}: Props) => {
  const {width} = useWindowDimensions();
  const isConditionsDone = value.length > 5;
  const isSequreType = placeholder === 'Password:';
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSequreType && true}
        onChangeText={onChangeText}
        value={value}
        style={styles(width).inputContainer}
      />
      {required && (
        <View style={field.required}>
          <Text
            style={{
              color: isConditionsDone ? colorList.LOGO_COLOR : colorList.RED,
            }}>
            {isConditionsDone ? 'V' : '*'}
          </Text>
        </View>
      )}
    </View>
  );
};

const field = StyleSheet.create({
  required: {position: 'absolute', right: 10, top: 15},
});

const styles = (width: number) =>
  StyleSheet.create({
    inputContainer: {
      height: 40,
      paddingLeft: 20,
      width: width * 0.8,
      borderWidth: 1,
      marginVertical: 2,
      justifyContent: 'center',
      borderRadius: 7,
      borderColor: 'grey',
    },
  });

export default CustomInput;
