import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: width * 0.8,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10,
        fontFamily: 'Lato-Regular'
    },
    image: {
        width: 200,
        height: 200,
    },
});