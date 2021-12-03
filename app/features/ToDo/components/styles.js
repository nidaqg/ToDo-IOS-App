import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
flex: 1;
background-color: white;
`;

export const TasksContainer = styled.View`
padding-vertical: 10px;
padding-horizontal: 20px;
`;

export const Header = styled.Text`
font-size: 30px;
font-weight: bold;
padding-horizontal: 15px;
`;

export const WriteTaskContainer = styled.KeyboardAvoidingView`
position: absolute;
     bottom: 0px;
     width: 100%;
     flex-direction: row;
     justify-content: center;
     align-items:center;
`;

export const TaskInput = styled(TextInput)`
width: 100%;
background-color: lightgrey;
border-radius: 5px;
`;

export const BackBtn = styled(Button)`
align-self: flex-start;
margin-bottom: 10px;
`;

export const TaskItem = styled.View`
background-color: white;
    padding: 10px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const LeftView = styled.View`
flex-direction: row;
align-items: center;
flex-wrap: wrap;
`;

export const Delete = styled.TouchableOpacity`
width: 24px;
    height: 24px;
    background-color: white;
    border-color: black;
    border-width: 2px;
    border-radius: 20px;
    margin-right: 20px;
`;

export const ItemText = styled.Text`
font-size: 20px;
`;








    

