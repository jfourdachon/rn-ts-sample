import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import style from '../constants/style/text'

type IProps = {
    roundsCount: number
    userChoice: number
    startNewGame: () => void
}

const GameOverScreen = ({ roundsCount, userChoice, startNewGame }: IProps) => {
    return (
        <View style={styles.screen}>
            <Text style={style.title}>The Game is over!</Text>
            <View style={styles.imageContainer}>
                {/* <Image source={require('../assets/images/success.png')} style={styles.image} resizeMode="cover" /> */}
                <Image source={{uri: 'https://www.oddizzi.com/wp-content/uploads/2011/01/img-woman-on-summit_big.jpg'}} style={styles.image} resizeMode="stretch" fadeDuration={1000} />
            </View>
            <Text style={style.body}>Number of rounds: {roundsCount}</Text>
            <Text style={style.body}>Number was: {userChoice}</Text>
            <Button title="NEW GAME" onPress={startNewGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 20
    },
    image: {
        // always set width + height on images with url
        width: '100%',
        height: '100%',
    }
})

export default GameOverScreen
