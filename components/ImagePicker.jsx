import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from "./assets/logo.png";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

const textstyle = {
  color: "#999",
  fontSize: 50,
  textAlign: "center",
  // lineHeight: 1,
};

// const onClick = () => {
//   openImagePickerAsync();
// };
const imgUri = "https://source.unsplash.com/300x150/?good";
const ImagePicker = () => {
  const [imgStyle, setImgStyle] = useState({ height: 150, width: 300 });
  const [selectedImgInfo, setSelectedImg] = useState(null);
  const bannerImg = useRef();

  const adjusImageStyle = ({ height, width }) => {
    let [adjustwidth, adjustheight] = [0, 0];
    const heightRatio = 300 / height;
    const widthRatio = 300 / width;
    console.log(height, width);
    //maxwidth maxheight : 300;
    if (height > width) {
      adjustwidth = width * heightRatio;
      adjustheight = height * heightRatio;
    } else {
      adjustwidth = width * widthRatio;
      adjustheight = height * widthRatio;
    }
    console.log(adjustwidth, adjustheight);
    setImgStyle({
      width: adjustwidth,
      height: adjustheight,
    });
  };

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to Access camera roll is requierd!! 허가해줘");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (!pickerResult.cancelled) {
      adjusImageStyle(pickerResult);
      setSelectedImg(pickerResult);
    }
  };

  const openSharedDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("공유가 불가능한 플랫폼입니다ㅠ");
      return;
    }

    await Sharing.shareAsync(selectedImgInfo.uri);
  };

  if (selectedImgInfo !== null) {
    return (
      <>
        <View style={styles.container}>
          <Image
            ref={bannerImg}
            source={{ uri: selectedImgInfo ? selectedImgInfo.uri : imgUri }}
            style={imgStyle}
          ></Image>

          <TouchableOpacity
            onPress={openSharedDialogAsync}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Share this photo</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={textstyle}>{"투두리스트를 만들예정"}</Text>
        <Image
          ref={bannerImg}
          source={{ uri: selectedImgInfo ? selectedImgInfo.uri : imgUri }}
          style={imgStyle}
        ></Image>
        <Text style={styles.instructions}>
          {"아래 버튼을 눌러서 사진공유도 해봐요"}
        </Text>

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </>
  );
};
export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: 888,
  },
  logo: { width: 305, height: 159, marginBottom: 10 },
  instructions: {
    color: "#999",
    fontSize: 22,
    marginHorizontal: 15,
  },
  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
