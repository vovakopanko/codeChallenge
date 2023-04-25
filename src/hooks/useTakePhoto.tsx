import ImageCropPicker from 'react-native-image-crop-picker';

export const useTakePhoto = (setPhoto: (url: string) => void) => {
  const takePhotoWithCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPhoto(image.path);
    });
  };
  return {
    takePhotoWithCamera,
  };
};
