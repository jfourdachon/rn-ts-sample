import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import style from '../constants/style/text'
import colors from '../constants/colors'
import MainButton from '../components/MainButton'

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
            <View style={styles.resultContainer}>
            <Text style={[style.body, styles.resultText]}>Your phone needed <Text style={styles.highlight}>{roundsCount}</Text> to guess the number <Text style={styles.highlight}>{userChoice}</Text></Text>
            </View>
            <MainButton onPress={startNewGame}>NEW GAME</MainButton>
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
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18
    },
     highlight: {
         color: colors.primary,
          fontFamily: 'open-sans-bold'
     },
})

export default GameOverScreen
