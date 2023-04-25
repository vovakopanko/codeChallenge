import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
};

const Title = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'left',
    width: '80%',
  },
});

export default Title;
