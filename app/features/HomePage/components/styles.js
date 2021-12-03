import styled from "styled-components/native";
import {TextInput } from 'react-native-paper';


export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #06304b;
`;

export const GroupSquare = styled.View`
  justify-content: center;
  margin: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;


export const InputContainer = styled.View`
position: absolute;
bottom: 0px;
width: 100%;
flex-direction: row;
justify-content: flex-start;
align-items: center;
justify-content: center;
`;

export const UserInput = styled(TextInput)`
width: 100%;
background-color: lightgrey;
border-radius: 5px;
`;

export const FloatingBtn = styled.TouchableOpacity`
position: absolute;
    margin: 16px;
    right: 0px;
    bottom: 60px;
    border-radius: 50px;
    width: 75px;
    height: 75px;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

export const FloatingBtnText = styled.Text`
color: white;
font-size: 30px;
`;

export const GroupItem = styled.TouchableOpacity`
   border: 1px;
   border-color: grey;
   border-radius: 20px;
   margin: 10px;
   padding: 30px;
   align-items: center;
   justify-content:center;
   background-color: white;
`;

export const HeaderCard = styled.ImageBackground`
height:200px;
background-color: dodgerblue;
align-items: center;
justify-content: center;
border-bottom-width: 3px;
`;

export const DeleteBtn = styled.TouchableOpacity`
background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 9;
`;


