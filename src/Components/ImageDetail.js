import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const ImageDetail = props => {
    return <View>
        <Image source={props.imageSource}/>
        <Text style={styles.textStyle}>{props.title}</Text>
        </View>
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 30
    }
});

export default ImageDetail;