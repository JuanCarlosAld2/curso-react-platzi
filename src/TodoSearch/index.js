import './TodoSearch.css'
import {InputLoading} from '../InputLoading'
import { TodoContext } from '../TodoContext';
import React from 'react';

function TodoSearch () {
  const {searchValue,setSearchValue,loading,todoItems} = React.useContext(TodoContext)
    return (
      <>
        {
          loading ? (
            <InputLoading/>
          ):(
            todoItems.length > 0 && // para no renderisar la barra de busqueda cuando no hay tareas (todos)
            < input 
              placeholder="Search todo"
              className= 'TodoSearch'
              value={searchValue}
              onChange={(event)=>{
                const inputText = event.target.value 
                setSearchValue(inputText);
              }}
            />
        )
        }
        
      </>
    
    )
  }

export { 
    TodoSearch 
}

/*
  ¿que es event? utilizar dentro de onChange
                // console.log('escribiste en el todo search');
                // console.log(event);
                // console.log(event.target);
                // console.log(event.target.value);

*/


// el estado es inmutable por lo que no se le puede asignar un valor.
// para esto se requiere de una funcion seteadora

/**
  setSearchValue es una funcion modificadora del estado 
 */