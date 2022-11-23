import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import colors from "../../constants/colors";

const GameOver = ({rounds, selectedNumber, onRestart}) => {
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait);
    }

    useEffect(() => {
        const suscription = Dimensions.addEventListener('change', statePortrait);

        return () => {
            suscription.remove();
        }
    });

    return (
        <View style={styles.container}>
            <Card style={isPortrait ? styles.content : styles.contentLandscape}>
                <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/shAAX3m_CJQyahe1eIochbdEqH7FDiLEQ9i5WdI8DwNj2N9auke35k8CRmyL0mh7ULs' }} 
                style={styles.image} />
                <View style={styles.contentDetails}>
                    <Text style={styles.textContent}>Rounds: {rounds}</Text>
                    <Text style={styles.textContent}>Selected Number: {selectedNumber}</Text>
                    <Button
                        title="Restart"
                        onPress={onRestart}
                        color={colors.primary}
                    />
                </View>
            </Card>
        </View>
    )
}

export default GameOver;