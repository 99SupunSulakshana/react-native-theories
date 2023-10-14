import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

    const greeting = 'S. Sulakshana';

    return <View style={styles.container}>

        <Text style={styles.textStyle}>Getting started for react native!</Text>

        <Text style={styles.subTopic}>My name is {greeting}</Text>

        <Button 
        style={styles.button}
        onPress={()=> navigation.navigate("ListScreen")}
        title="Go to the List Screen"/>

        <Button 
        onPress={()=> navigation.navigate("CustomButtonsScreen")}
        title="Go to the Buttom Screen"/>
 
        <Button 
        onPress={()=> navigation.navigate("ComponentsScreen")}
        title="Go to the Components Screen"/>

        <Button 
        onPress={()=> navigation.navigate("ImageScreen")}
        title="Go to the Image Screen"/>

        <Button 
        onPress={()=> navigation.navigate("CounterScreen")}
        title="Go to the Counter Screen"/>

        <Button 
        onPress={()=> navigation.navigate("ColorScreen")}
        title="Go to the Color Screen"/>

        <Button 
        onPress={()=> navigation.navigate("SquareScreen")}
        title="Go to the Color changing Screen"/>

        <Button 
        onPress={()=> navigation.navigate("TextInputScreen")}
        title="Go to the Text Input Handling Screen"/>

        <Button 
        onPress={()=> navigation.navigate("BoxScreen")}
        title="Go to the Box Screen"/>

    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    textStyle : {
        fontSize: 45,
        textAlign:'center'
    },
    subTopic: {
        fontSize: 30,
        textAlign:'center',
        marginBottom: 30
    },
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 12
    },
    separator: {
        marginVertical:8,
        borderBottomColor:"#009688",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});

export default HomeScreen;