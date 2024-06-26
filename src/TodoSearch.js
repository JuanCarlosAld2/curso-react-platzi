import React from 'react';
import './TodoSearch.css'

function TodoSearch ({searchValue,setSearchValue}) {
  
    return (
      < input 
      placeholder="Search todo"
      className= 'TodoSearch'
      value={searchValue}
      onChange={(event)=>{
        // console.log('escribiste en el todo search');
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        setSearchValue(event.target.value);
      }}
      />
    )
  }

export { 
    TodoSearch 
}


// el estado es inmutable por lo que no se le puede asignar un valor.
// para esto se requiere de una funcion seteadora

/**
  setSearchValue es una funcion modificadora del estado 
 */