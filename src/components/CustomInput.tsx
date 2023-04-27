import React, {useState} from 'react';
import {StyleSheet, TextInput, View, useWindowDimensions} from 'react-native';
import RequireCheckBox from './RequireCheckBox';
import ErrorNotice from './ErrorNotice';

interface Props {
  placeholder: string;
  onChangeText: (str: string) => void;
  value: string;
  required: boolean;
}

const CustomInput = ({placeholder, onChangeText, value, required}: Props) => {
  const {width} = useWindowDimensions();
  const [isFocus, setIsFocus] = useState(false);
  const isSequreType = placeholder === 'Password:';
  const onBlur = () => {
    if (value.length > 0) {
      setIsFocus(false);
    }
    if (value.length === 0) {
      setIsFocus(true);
    }
  };

  return (
    <View>
      <TextInput
        onBlur={onBlur}
        placeholder={placeholder}
        secureTextEntry={isSequreType}
        onChangeText={onChangeText}
        value={value}
        style={styles(width).inputContainer}
      />
      <RequireCheckBox required={required} value={value} />
      <ErrorNotice
        required={required}
        placeholder={placeholder}
        isFocus={isFocus}
        value={value}
      />
    </View>
  );
};

const styles = (width: number) =>
  StyleSheet.create({
    inputContainer: {
      height: 40,
      paddingLeft: 20,
      width: width * 0.8,
      borderWidth: 1,
      marginVertical: 2,
      marginBottom: 20,
      justifyContent: 'center',
      borderRadius: 7,
      borderColor: 'grey',
    },
  });

export default CustomInput;
