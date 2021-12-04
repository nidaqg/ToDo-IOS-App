import React, {useContext} from "react";
import {GroupItem, Title, DeleteBtn} from './styles';
import { AntDesign } from "@expo/vector-icons";
import { TaskGroupContext } from "../../../infrastructure/context/GroupListContext";

export const Group = ({title, onGroupClick, deleteNow}) => {
const {removeFromGroupList} = useContext(TaskGroupContext);

  return (
    <>
    <GroupItem
    onPress={() => onGroupClick('ToDo', {title:title,})}
    >
      <DeleteBtn
      onPress={()=>{removeFromGroupList(title)}}
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

