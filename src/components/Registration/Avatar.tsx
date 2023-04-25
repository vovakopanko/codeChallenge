import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colorList} from '../../constants/colors';
import {useTakePhoto} from '../../hooks/useTakePhoto';

interface Props {
  photo: string;
  setPhoto: (url: string) => void;
}

const Avatar = ({photo, setPhoto}: Props) => {
  const {takePhotoWithCamera} = useTakePhoto(setPhoto);
  return (
    <TouchableOpacity style={styles.container} onPress={takePhotoWithCamera}>
      {photo ? (
        <Image source={{uri: photo}} style={styles.imageBlock} />
      ) : (
        <View style={styles.imageBlock}>
          <Text style={styles.placeHolder}>Tap to add avatar</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageBlock: {
    width: 150,
    height: 200,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    justifyContent: 'center',
  },
  placeHolder: {
    justifyContent: 'center',
    textAlign: 'center',
    color: colorList.BLACK,
  },
});

export default Avatar;
