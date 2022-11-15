import React from "react";
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

const StartGame = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let's start!</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Select a number</Text>
                <TextInput style={styles.input} placeholder="0" />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Reset"
                    onPress={() => null}
                    color='#A7BED3'
                />
                <Button 
                    title="Confirm"
                    onPress={() => null}
                    color='#A7BED3'
                />
            </View>
        </View>
    )
}

export default StartGame;