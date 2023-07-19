import { StyleSheet } from "react-native";
import React, { useRef, useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { launchCamera } from 'react-native-image-picker';
import { uploadImage } from "./utils";
import { OptionsContext, GlobalOptionsContext } from "@options";

const Camera = () => {
  // More info on all the options is below in the API Reference... just some common use cases shown here
  const actionSheet = useRef(null);
  const options = useContext(OptionsContext);
  const gOptions = useContext(GlobalOptionsContext); // eslint-disable-next-line no-unused-vars

  const [isLoading, setLoading] = useState(false);
  const ImagePickerOptions = ["Take Photo", "Choose from Gallery", "Cancel"];
  const [data, setData] = useState([]);
  const {
    styles,
    buttonText
  } = options;

  const fetchImages = () => {
    fetch(`${gOptions.url}/modules/camera/photos/user/`).then(response => response.json()).then(json => setData(json)).catch(error => console.log(error)).finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera capture');
      } else if (response.error) {
        console.log('Camera capture error: ', response.error);
      } else if (response.uri) {
        // Implement your logic to handle the captured image here
        // You can upload the image or process it further
        // For example, you can call the `uploadImage` function passing the `response` object
        uploadImage(response, gOptions).then(() => {
          fetchImages();
        });
      }
    });
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity>
      <ImageBackground source={{
      uri: `${gOptions.url}/${item.image}`
    }} style={styles.image}></ImageBackground>
    </TouchableOpacity>;

  return <View style={_styles.KolcQQpM}>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem} />
      
      <TouchableOpacity onPress={openCamera} style={styles.photoBtn}>
        <Text style={styles.photoBtnTxt}>{buttonText}</Text>
      </TouchableOpacity>
    </View>;
};

export default {
  title: "Camera",
  navigator: Camera
};

const _styles = StyleSheet.create({
  KolcQQpM: {
    flex: 1
  }
});