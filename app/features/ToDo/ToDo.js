import React, { useState, useContext } from "react";
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
import { ToDoListContext } from "../../infrastructure/context/ToDoListContext";

export const ToDo = ({ navigation, route }) => {
  const [task, setTask] = useState("");
  const {tasklist, addToDo, deleteToDo} = useContext(ToDoListContext);

  const { title } = route.params;

  //function to handle change in input box
  const handleChange = (text) => {
    setTask(text);
  };

  //function to handle clicking of add button
  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      addToDo(task, title)
      setTask(null);
    } else {
      Alert.alert("Oops, looks like you forgot to enter a task!");
    }
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
              {tasklist !== null ? (
              tasklist.map((item, index) => {
                if(item.title === title){
                return (
                  <Task
                    onSubmit={() => deleteToDo(index)}
                    key={index}
                    item={item.task}
                  />
                )} else{null}
              })
              ):(null)
            }
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
