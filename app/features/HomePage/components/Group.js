import React from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';

const GroupItem = styled.TouchableOpacity`
   border: 1px;
   border-color: grey;
   border-radius: 20px;
   margin: 10px;
`;

export const Group = ({title}) => {

  const navigation = useNavigation()
  return (
    <>
    <GroupItem
    onPress={() => navigation.navigate('ToDo', {group:{title}})}
    >
    <List.Section>
    <List.Item title={title} left={() => <List.Icon icon="star-outline" />}/>
  </List.Section>
</GroupItem>
      </>
  );
}

