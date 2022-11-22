import React from "react";
import { View, Text, Image, Card, Button } from "react-native";
import { styles } from "./styles";

const GameOver = ({rounds, selectedNumber, onRestart}) => {
    return (
        <View style={styles.container}>
            <Text>Game Over</Text>
        </View>
    )
}

export default GameOver;