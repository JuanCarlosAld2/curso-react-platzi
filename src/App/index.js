import { TodoProvider } from '../TodoContext';
import {AppUI} from './AppUI'
import React from 'react';

function App() { //esto es jsx no html
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
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