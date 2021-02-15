import React from 'react'
import styled from 'styled-components/native'
import colors from '../constants/colors'


const HeaderView = styled.View`
    width: 100%;
    height: 80px;
    background-color: ${colors.primary};
    padding-top: 25px;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.Text`
    color: #0c0b0b;
    font-size: 18px;
`;

export type HeaderProps = {
    title: string;
}

const Header = ({title}: HeaderProps) => {

    return (
        <HeaderView>
            <HeaderText>{title}</HeaderText>
        </HeaderView>
    )
}

export default Header