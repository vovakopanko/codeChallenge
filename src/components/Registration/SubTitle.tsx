import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SubTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        {`Use the form below to submit your portfolio. 
An email and passwordare required`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  subtitle: {
    width: '80%',
    textAlign: 'left',
  },
});

export default SubTitle;
