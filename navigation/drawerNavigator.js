import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen/>
            </Drawer.Navigator>
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