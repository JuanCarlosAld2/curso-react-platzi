import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos =[
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de Intro a React.js', completed: false},
  { text: 'Llorar con la llorana', completed: false},
  { text: 'LALALALALALA', completed: false},
  { text: 'Usar estados derivados', completed:true},
];

function App() { //esto es jsx no html

  //Estado de App
  const [todoItems, setTodoItems] = React.useState(defaultTodos);

  //Estado de TodoSearch
  const [searchValue,setSearchValue] = React.useState('');


  
  //Estados derivados: 
  // const completedTodos = todoItems.filter((todo)=> todo.completed === true).length;
  const completedTodos = todoItems.filter((todo)=> !!todo.completed).length;
  const totalTodos = todoItems.length ;

  //Estado derivado: treas filtradas 
  const searchTodoItems = todoItems.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText)
  });
  //console.log("soy todoItems:",searchTodoItems);


  const completeTodo = (text) => {
    const newTodos = [...todoItems];
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text
    ) 
    // Alternar el estado de completado 
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;  
    setTodoItems(newTodos)
  }

  const deleteTodos = (text) =>{
    const newTodos = [...todoItems].filter((todo) => todo.text !== text);
    setTodoItems(newTodos);
  }

  const renderTodos = () => {
    if (todoItems.length === 0) {
      return <h2>Add a new task</h2>;
    } else if (searchTodoItems.length === 0) {
      return <h2>Task not found</h2>;
    } else {
      return searchTodoItems.map((todo) => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={completeTodo}
          onDelete={deleteTodos}
        />
      ));
    }
  };

    

  return (
    <>
 
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList >
        {
         renderTodos()
        }
      </TodoList>
      
       <CreateTodoButton /> 

    </>
  );
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

*/