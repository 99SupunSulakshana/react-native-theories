import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, useState } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButtons = ()=>{
    return <IconButtons/>
};

const NormalButton = ()=>{
    return(
        <View style={styles.container}>
            <Button 
            onPress={()=> console.log("Normal Button Clicked!")}
            title="Normal Button"/>
        </View>
    );
};

const TouchanbelOpacityButton = ()=>{
    return(
        <View style={styles.container}>
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={()=>console.log("TouchableOpacityButton Clicked!")}
            style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Sample TouchableOpacity Button</Text>
    </TouchableOpacity>
        </View>
    ); 
};

const LinearGradiantBackgroundButton = ()=>{
    return(
    <TouchableOpacity onPress={()=>console.log("LinearGradiantButton Clicked!")}>
    <LinearGradient
    colors={["#1387d4", "#259399", "#0b466e"]}
    start={{x: 0, y: 0}} // Gradient starting coordinates
    end={{x: 0, y: 0.5}} // Gradient ending coordinates
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}></Text>
    </LinearGradient>
    </TouchableOpacity>
    );
};

const IconButtons = ()=>{

    return(
        <View style={styles.container}>
        <Icon.Button
        name={icon="sign-in"}
        backgroundColor="#1387d4"
        style={styles.appButton}>
        <Text style={styles.appButtonText}>Facebook Sign In</Text>
      </Icon.Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent:"center"
    },
    appButtonContainer:{
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        textAlign: "center"
    }
});

export default CustomButtons;