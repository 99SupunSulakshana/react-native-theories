import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 18},
        {name: 'Friend #2', age: 28},
        {name: 'Friend #3', age: 28},
        {name: 'Friend #4', age: 18},
        {name: 'Friend #5', age: 18},
    ];
    return <View style={styles.container}>
        <FlatList 
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.itemStyle}>
                {item.name} - Age {item.age}
                </Text>
        }}
        ListHeaderComponent={()=>(
            <Text style={styles.header}>User list - Sample Component</Text>
        )}
        ListFooterComponent={()=>(
            <Text style={styles.footer}>Thank You!</Text> 
        )}
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    itemStyle: {
        marginVertical: 20
    },
    header:{
        fontSize: 30,
        textAlign: "center",
        marginTop:20,
        fontWeight:'bold',
        textDecorationLine:'underline'
    },
    footer:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
});

export default ListScreen;