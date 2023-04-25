import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {colorList} from '../constants/colors';

interface Props {
  btnName: string;
  backgroundColor?: string;
  textColor?: string;
  func: (val: boolean) => void;
  isOpen?: boolean;
  disabled?: boolean;
}

const CustomButton = ({
  btnName,
  backgroundColor = colorList.RED,
  textColor = colorList.WHITE,
  func,
  isOpen,
  disabled = false,
}: Props) => {
  const {width} = useWindowDimensions();
  const handler = () => {
    func(!isOpen);
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handler}
      style={{
        ...btnStyle(disabled ? colorList.GRAY : backgroundColor).btnContainer,
        width: width * 0.8,
      }}>
      <Text style={btnStyle(textColor).nameBtn}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const btnStyle = (color: string) =>
  StyleSheet.create({
    btnContainer: {
      marginVertical: 10,
      justifyContent: 'center',
      width: '80%',
      height: 45,
      backgroundColor: color,
      marginBottom: 10,
      borderRadius: 7,
    },
    nameBtn: {
      textAlign: 'center',
      fontWeight: '700',
      color: color,
    },
  });
