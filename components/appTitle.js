import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class AppTitle extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Titulo</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
});