import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppTitle from "../components/appTitle";

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <AppTitle/>
                <Text>Home</Text>
            </View>
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