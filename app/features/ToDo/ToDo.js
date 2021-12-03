import React, { useState } from "react";
import { Keyboard, Alert, ScrollView } from "react-native";
import {Task} from "./components/Task";
import {
  SafeArea,
  TasksContainer,
  Header,
  WriteTaskContainer,
  TaskInput,
  BackBtn,
} from "./components/styles";

export const ToDo = ({ navigation, route }) => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const { title } = route.params;

  //function to handle change in input box
  const handleChange = (text) => {
    setTask(text);
  };

  //function to handle clicking of add button
  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      setTasklist([...tasklist, task]);
      setTask(null);
    } else {
      Alert.alert("Oops, looks like you forgot to enter a task!");
    }
  };

  // function to handle deleting task
  const deleteTask = (index) => {
    let listCopy = [...tasklist];
    listCopy.splice(index, 1);
    setTasklist(listCopy);
  };

  return (
    <>
      <SafeArea>
        <BackBtn
          color="grey"
          icon="arrow-left"
          onPress={() => navigation.goBack()}
        >
          Back
        </BackBtn>
        <Header>{title}</Header>
        <ScrollView>
          <TasksContainer>
            <>
              {tasklist.map((item, index) => {
                return (
                  <Task
                    onSubmit={() => deleteTask(index)}
                    key={index}
                    item={item}
                  />
                );
              })}
            </>
          </TasksContainer>
        </ScrollView>
      </SafeArea>

      <WriteTaskContainer
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TaskInput
          placeholder={"What to do?"}
          onChangeText={handleChange}
          value={task}
          onSubmitEditing={() => handleAddTask()}
        />
      </WriteTaskContainer>
    </>
  );
};
