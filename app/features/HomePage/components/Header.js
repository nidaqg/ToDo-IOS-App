import React from 'react';
import { Text } from 'react-native';
import styled from "styled-components/native";


const HeaderCard = styled.ImageBackground`
flex:1;
background-color: dodgerblue;
padding: 100px;
align-items: center;
justify-content: center;
`


export const Header = () => {
    return (
        <>
        <HeaderCard
        source={require("../../../assets/background.png")}
        resizeMode="cover"
        >
        </HeaderCard>
        </>
    )
}