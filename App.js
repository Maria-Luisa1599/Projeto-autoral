import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Home from "./screens/home";

export default class App extends React.Component{
    render(){
        return(
              <Home/>
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