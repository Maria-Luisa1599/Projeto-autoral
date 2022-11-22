import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen/>
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});