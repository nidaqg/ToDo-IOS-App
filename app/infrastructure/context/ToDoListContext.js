import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ToDoListContext = createContext();

export const ToDoListContextProvider = ({children}) => {
const [tasklist, setTasklist] = useState([]);

const add = (task) => {
    setTasklist([...tasklist, task]);
};

const remove = (index) => {
  let listCopy = [...tasklist];
  listCopy.splice(index, 1);
  setTasklist(listCopy);
};

  // //store task groups in async storage
  // const storeGroups = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     console.log(jsonValue);
  //     await AsyncStorage.setItem('@storage_Key', jsonValue);
  //   } catch (e) {
  //     console.log("saving error: ", e);
  //   }
  // };

  // //load stored groups
  // const getGroups = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@storage_Key');
  //     console.log("GET",jsonValue)
  //     return jsonValue != null ? setGrouplist(JSON.parse(jsonValue)) : null;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // //load and save groups to async
  // useEffect(() => {
  //   storeGroups(grouplist);
  // }, [grouplist]);

  // useEffect(() => {
  //   getGroups();
  // }, []);



    return(
        <ToDoListContext.Provider
        value={{
            tasklist,
            addToDo: add,
            deleteToDo: remove           
        }}
        >{children}</ToDoListContext.Provider>
    )
}