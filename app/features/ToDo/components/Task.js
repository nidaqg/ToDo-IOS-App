import React from "react";
import { 
  TaskItem,
  LeftView,
  Delete,
  ItemText
} from "./styles";

export  const Task= ({onSubmit, item}) => {
  return (
    <TaskItem>
      <LeftView>
        <Delete
        onPress={onSubmit}
        />

        <ItemText>{item}</ItemText>
      </LeftView>

    </TaskItem>
  );
};