import { IconProps } from '@material-ui/core'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import colors from '../constants/colors'

type IProps = {
    children: string | IconProps
    onPress: () => void
}

const MainButton = ({ children, onPress }: IProps) => {
    let ButtonComponent: React.ComponentType<any>

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback
    } else {
        ButtonComponent = TouchableOpacity
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent onPress={onPress} activeOpacity={0.7}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </ButtonComponent>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
    },
})

export default MainButton
