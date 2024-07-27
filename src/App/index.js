
import { useLocalStorage } from './useLocalStorage';
import {AppUI} from './AppUI'
import React from 'react';

// metodos para este ejercicio ejecutarlos en el navegador y de cirta manera reiniciar la aplicacion 

// localStorage.removeItem('TODOS_V1')

// const defaultTodos =[
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la llorana', completed: false},
//   { text: 'LALALALALALA', completed: false},
//   { text: 'Usar estados derivados', completed:true},
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))

function App() { //esto es jsx no html


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
    <AppUI
        completedTodos = {completedTodos}
        totalTodos = {totalTodos}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        searchTodoItems = {searchTodoItems}
        completeTodo = {completeTodo}
        deleteTodos = {deleteTodos}
        todoItems = {todoItems}
        loading={loading}
        error={error}
    />
  )

};

export default App;





/*
find para encontrar un primer objeto o elemto que cumplan con cierta condicion 

Estados derivados 
Un estado derivado (derived state) se refiere a un estado que se calcula o deriva a partir de otros estados o props existentes en el componente 

Cuándo Usar Estados Derivados
Filtros: Cuando necesitas filtrar una lista basada en ciertos criterios.
Cálculos: Cuando necesitas mostrar valores calculados a partir de otros estados (por ejemplo, suma, promedio, etc.).
Visualizaciones Condicionales: Cuando la visibilidad de un componente depende de otros estados o props.


--- SIEMPRE ES MEJOR TRABAJAR CON UNA COPIA DEL ESTADO CUANDO ESTE VA A SER MODIFICADO PARA NO CAUSAR CONFLICTOS 


//////////////////////////////////////////// 

*** equivalencia para alternar el estado de completado 

if(!newTodos[todoIndex].completed){
    newTodos[todoIndex].completed = true
    return setTodoItems(newTodos)
  }
  newTodos[todoIndex].completed = false

////////////////////////////////////////////

////////////////////////////////////////////

*** quivalencia para borrar un todo

    const newTodos = [...todoItems];
    const deleteTodo = newTodos.filter((todo)=> todo.text !== text)
      setTodoItems(deleteTodo)
///////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

aunque la anidadion de operadores ternario esta bien estructurada, puede volverse dificil de leer si se complica más.En esos casos, considerar una funcion para manejar la logica  condiconal

  renderTodos() es quivalente al de abajo:

 todoItems.length === 0 ? (
            <h2>Add a new task</h2>
          ) : (
            searchTodoItems.length === 0 ? (
              <h2>task not found</h2>
            ) : (   
              searchTodoItems.map((todo) => (
                < TodoItem 
                  key = {todo.text}
                  text = {todo.text}
                  completed = {todo.completed}
                  onComplete={completeTodo}
                  onDelete={deleteTodos}
                />
              ))
            )
          )

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  console.log('log 1');
  React.useEffect(()=>{
    console.log('loooooooooog 2');
  },[totalTodos])
  console.log('log 3');

    useEffect se ejecuta al final y solo se ejecuta una vez al menos que este de penditndo de algo como en este caso cuando la longitud de totalTodos  cambie useEffect se ejecuta 
*/