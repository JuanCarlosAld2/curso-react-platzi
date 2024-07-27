import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}) {
    

  //Estado de App
  const {
    item: todoItems, 
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1',[]); // al ser un array no importa el nombre a la hora de hacer destrucuracion 

  //Estado de TodoSearch
  const [searchValue,setSearchValue] = React.useState('');


  
  //Estados derivados: 
  // const completedTodos = todoItems.filter((todo)=> todo.completed === true).length;
  const completedTodos = todoItems.filter((todo)=> !!todo.completed).length;
  const totalTodos = todoItems.length ;



  //Estado derivado: treas filtradas 
  const searchTodoItems = [...todoItems].filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText)
  });

  const completeTodo = (text) => {
    const newTodos = [...todoItems];
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text
    ) 
    // Alternar el estado de completado 
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;  
    saveTodos(newTodos)
  }

  const deleteTodos = (text) =>{
    const newTodos = [...todoItems].filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  }


    return (
        <TodoContext.Provider value = {{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchTodoItems,
            completeTodo,
            deleteTodos,
            todoItems,
            loading,
            error
        }}>
            {children}
        </TodoContext.Provider>
    )
}



export {TodoContext,TodoProvider}


/*
<TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer>

*/