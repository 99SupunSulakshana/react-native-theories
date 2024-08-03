import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

    switch (action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state
            : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state
            : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state
            : { ...state, blue: state.blue + action.amount };
        default:    
            return state;
    }
    
};


const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    // const setColor = (color, change) => {
    //     switch (color){
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             return;
            
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //             return;

    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //             return;
    //         default:
    //             return;
    //     }
    // };

    return <View style={styles.container}>
        <Text style={styles.textStyle}>Red</Text>

        <Button 
        onPress={()=> dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})}
        title="More Red"/>

        <Button 
        onPress={()=> dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
        title="Less Red"/>

        <Text style={styles.textStyle}>Green</Text>

        <Button 
        onPress={()=> dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})}
        title="More Green"/>

        <Button 
        onPress={()=> dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
        title="Less Green"/>

        <Text style={styles.textStyle}>Blue</Text>

        <Button
        onPress={()=> dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT})}
        title="More Blue"/>

        <Button 
        onPress={()=> dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
        title="Less Blue"/>

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`, padding: 18,  }} />

    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    textStyle : {
        fontSize: 45,
        textAlign:'center',
        padding: 10
    },
    button: {
        padding: 18
    }
});

export default SquareScreen;