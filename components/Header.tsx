import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import colors from '../constants/colors'
import style from '../constants/style/text'

const HeaderView = styled.View`
    width: 100%;
    height: 80px;
    background-color: ${colors.primary};
    padding-top: 25px;
    align-items: center;
    justify-content: center;
`

const HeaderText = styled.Text`
    color: #0c0b0b;
`

export type HeaderProps = {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    return (
        <View style={[styles.headerBase, Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})]}>
            <Text style={[style.title]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 80,
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {

        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    headerAndroid: {
        backgroundColor: colors.primary,
    },
    headerText: {
        color: Platform.OS === 'ios' ? colors.primary : 'white'
    }
})
export default Header
