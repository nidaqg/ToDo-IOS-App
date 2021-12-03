import React from "react";
import {GroupItem, Title, DeleteBtn} from './styles';
import { AntDesign } from "@expo/vector-icons";

export const Group = ({title, onGroupClick}) => {

  return (
    <>
    <GroupItem
    onPress={() => onGroupClick('ToDo', {title:title,})}
    >
      <DeleteBtn
      onPress={()=>{console.log(title)}}
      >
      <AntDesign
      name= "close"
      size={15}
      />
      </DeleteBtn>
      <Title>{title}</Title>
</GroupItem>
      </>
  );
}

