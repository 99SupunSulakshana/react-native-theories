import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = ()=> {
    return <View>
        <ImageDetail title="Beach" imageSource={require("../../assets/beach.jpg")}/>
        <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")}/>
        <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")}/>
    </View>
};

const styles = StyleSheet.create({
    textStyle : {
        fonstSize: 30
    }
});


export default ImageScreen;
