import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextInputScreen = () => {

    const [name, setName] = useState('');
    return <View>
        <Text style={styles.textStyle}>Enter user name</Text>
        <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        />
        {name.length < 4 ? <Text style={styles.validation}>User name must be 4 charactors</Text> : null}
        <Text style={styles.textStyle}>user name is {name}</Text>
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 18,
        borderColor: 'black',
        borderWidth: 1
    },
    textStyle:{
        padding: 18
    },
    validation: {
        color: 'red',
        paddingLeft: 18
    }
});

export default TextInputScreen;
