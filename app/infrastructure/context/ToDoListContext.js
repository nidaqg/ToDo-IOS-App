import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ToDoListContext = createContext();

export const ToDoListContextProvider = ({children}) => {
const [tasklist, setTasklist] = useState(null);

const add = (task, title) => {
  if (tasklist !== null){
    setTasklist([...tasklist, {task: task, title: title}])
} else {
  setTasklist([{task: task, title: title}])
}
};

const remove = (index) => {
  let listCopy = [...tasklist];
  listCopy.splice(index, 1);
  setTasklist(listCopy);
};

const removeEntireGroup = (group) => {
const newTaskList = tasklist.filter(
  (tasklist) => group !== tasklist.title
);
setTasklist(newTaskList);
}

const storeToDos = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log("STORE",jsonValue);
    await AsyncStorage.setItem('@ToDos', jsonValue);
  } catch (e) {
    console.log("saving error: ", e);
  }
};

//load stored groups
const getToDos = async () => {
  try {
    const value = await AsyncStorage.getItem('@ToDos');
    console.log("GET",value)
    return value !== null ? setTasklist(JSON.parse(value)) : null;
  } catch (e) {
    console.log(e);
  }
};

//load and save groups to async
useEffect(() => {
  tasklist !== null ?
  storeToDos(tasklist) : null
}, [tasklist]);

useEffect(() => {
  getToDos();
}, []);



    return(
        <ToDoListContext.Provider
        value={{
            tasklist,
            addToDo: add,
            deleteToDo: remove,
            removeEntireGroup           
        }}
        >{children}</ToDoListContext.Provider>
    )
}