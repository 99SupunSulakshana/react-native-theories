import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = ()=>{
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>child 1</Text>
        <Text style={styles.textStyle}>child 2</Text>
        <Text style={styles.textStyle}>child 3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textStyle:{
        borderWidth: 1,
        borderColor: "red",
        margin:10,
    }
});

export default BoxScreen;