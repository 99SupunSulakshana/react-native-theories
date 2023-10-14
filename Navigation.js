import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CustomButtons from "./src/screens/CustomButtons";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextInputScreen from "./src/screens/TextInput";
import BoxScreen from "./src/screens/BoxScreen";

const Stack = createNativeStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ComponentsScreen" component={ComponentsScreen} />
            <Stack.Screen name="CustomButtonsScreen" component={CustomButtons} />
            <Stack.Screen name="ListScreen" component={ListScreen} />
            <Stack.Screen name="ImageScreen" component={ImageScreen} />
            <Stack.Screen name="CounterScreen" component={CounterScreen} />
            <Stack.Screen name="ColorScreen" component={ColorScreen} />
            <Stack.Screen name="SquareScreen" component={SquareScreen} />
            <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
            <Stack.Screen name="BoxScreen" component={BoxScreen} />
        </Stack.Navigator>
    );
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}