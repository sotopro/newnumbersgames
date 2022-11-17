import React from "react";
import { View, Text} from 'react-native';
import { styles } from './styles';

const Game = ({selectedNumber}) => {
    return (
        <View style={styles.container}>
            <Text>Game Screen</Text>
        </View>
    )
}

export default Game;