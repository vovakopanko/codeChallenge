import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colorList} from '../constants/colors';

type Props = {
  titleColor?: string;
  titleName: string;
};

const LogoName = ({titleColor = colorList.LOGO_COLOR, titleName}: Props) => (
  <Text style={styles(titleColor).title}>{titleName}</Text>
);
export default LogoName;

const styles = (color: string) =>
  StyleSheet.create({
    title: {
      color: color,
      fontWeight: '700',
      fontSize: 25,
      marginTop: 20,
    },
  });
