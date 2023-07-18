import { rest_auth_password_reset_create } from "../../store/namelessmeadowAPI/passwords.slice.js";
import { useSelector } from "react-redux";
import { modules_camera_photos_user_retrieve } from "../../store/namelessmeadowAPI/images.slice.js";
import { useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import React, { useRef, useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import ActionSheet from "react-native-actionsheet";
import { pickFromCamera, pickFromGallery, uploadImage } from "./utils";
import { OptionsContext, GlobalOptionsContext } from "@options";

const Camera = () => {
  const {
    entities: console
  } = useSelector(state => state.console);
  const dispatch = useDispatch(); // More info on all the options is below in the API Reference... just some common use cases shown here

  const actionSheet = useRef(null);
  const options = useContext(OptionsContext);
  const gOptions = useContext(GlobalOptionsContext); // eslint-disable-next-line no-unused-vars

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
    dispatch(rest_auth_password_reset_create());
  }, []);

  const renderItem = ({
    item
  }) => <TouchableOpacity>
      <ImageBackground source={{
      uri: `${gOptions.url}/${item.image}`
    }} style={styles.image}></ImageBackground>
    </TouchableOpacity>;

  const onSubmit = () => {
    dispatch(modules_camera_photos_user_retrieve({}));
  };

  return <View style={_styles.yATkpDvj}>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem} />
      <ActionSheet ref={actionSheet} title={"Select Image"} options={ImagePickerOptions} cancelButtonIndex={2} onPress={async index => {
      let res;

      switch (index) {
        case 0:
          res = await pickFromCamera();
          break;

        case 1:
          res = await pickFromGallery();
          break;
      }

      if (res) {
        uploadImage(res, gOptions).then(() => {
          fetchImages();
        });
      }
    }} />
      <TouchableOpacity onPress={onSubmit} style={styles.photoBtn}>
        <Text style={styles.photoBtnTxt}>{buttonText}</Text>
      </TouchableOpacity>
    </View>;
};

export default {
  title: "Camera",
  navigator: Camera
};

const _styles = StyleSheet.create({
  yATkpDvj: {
    flex: 1
  }
});