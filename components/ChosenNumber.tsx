import React, { Dispatch, SetStateAction } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'

type IProps = {
    selectedNumber: number | null
}

const ChosenNumber = ({ selectedNumber }: IProps) => {
    return (
        <>
            <Text>You selected</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{selectedNumber}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    numberContainer: {
        borderColor: colors.accent,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    number: {
        fontSize: 22,
        color: colors.primary,
    },
})

export default ChosenNumber
