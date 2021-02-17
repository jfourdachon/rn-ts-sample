import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Card from '../components/Card'
import ChosenNumber from '../components/ChosenNumber'

const generatedRandomNumber = (min: number, max: number, exclude: number | null): number => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generatedRandomNumber(min, max, exclude)
    } else {
        return rndNum
    }
}

type IProps = {
    userChoice: number | null
}

const GameScreen = (props: IProps) => {

    const [currentGuess, setCurrentGuess] = useState(generatedRandomNumber(1, 100, props.userChoice))
    return (
        <View style={styles.screen}>
            <Text>Opponent's guess</Text>
            <ChosenNumber selectedNumber={currentGuess} />
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {}} />
                <Button title="GREATER" onPress={() => {}} />
            </Card>
        </View>
    )
}

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen
