import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 5,
    },
    number: {
        fontSize: 20,
        fontFamily: 'Lato-Bold'
    }
})