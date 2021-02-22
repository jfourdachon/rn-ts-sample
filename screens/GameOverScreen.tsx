import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import style from '../constants/style/text'
import colors from '../constants/colors'
import MainButton from '../components/MainButton'

type IProps = {
    roundsCount: number
    userChoice: number
    startNewGame: () => void
}

const GameOverScreen = ({ roundsCount, userChoice, startNewGame }: IProps) => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width)
            setAvailableDeviceHeight(Dimensions.get('window').height)
        }
        Dimensions.addEventListener('change', updateLayout)
        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={style.title}>The Game is over!</Text>
                <View
                    style={[
                        styles.imageContainer,
                        {
                            width: availableDeviceWidth * 0.7,
                            height: availableDeviceWidth * 0.7,
                            borderRadius: (availableDeviceWidth * 0.7) / 2,
                        },
                    ]}
                >
                    {/* <Image source={require('../assets/images/success.png')} style={styles.image} resizeMode="cover" /> */}
                    <Image
                        source={{
                            uri: 'https://www.oddizzi.com/wp-content/uploads/2011/01/img-woman-on-summit_big.jpg',
                        }}
                        style={styles.image}
                        resizeMode="stretch"
                        fadeDuration={500}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <Text style={[style.body, styles.resultText]}>
                        Your phone needed <Text style={styles.highlight}>{roundsCount}</Text>
                        rounds to guess the number <Text style={styles.highlight}>{userChoice}</Text>
                    </Text>
                </View>
                <MainButton onPress={startNewGame}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20,
    },
    image: {
        // always set width + height on images with url
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: Dimensions.get('window').height / 40,
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 600 ? 16 : 20,
    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold',
    },
})

export default GameOverScreen
