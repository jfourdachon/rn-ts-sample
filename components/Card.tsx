import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'


type CardProps = {
    children?: React.ReactNode;
    style: {width: number, maxWidth: string, alignItems: string}
  }
  
const Card = (props: CardProps) => {
    return (
        <View style={[ styles.card, props.style ] as ViewStyle}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        shadowColor: 'rgb(12,12,12)',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20
    },
})
