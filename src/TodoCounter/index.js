// COMPONENTE CON HOJA CSS 
import { TodoContext } from '../TodoContext';
import { TodoCounterLoading } from '../TodoCounterLoading';
import './TodoCounter.css';
import React from 'react';

function TodoCounter () {

  const { totalTodos, completedTodos,loading,todoItems} = React.useContext(TodoContext)
    return (
      <>
        {loading && <TodoCounterLoading/>}
        {
          
          todoItems.length > 0 &&
          !loading && totalTodos === completedTodos ? ( //el uso de loadiding es cuestionable
            
            <h1 className='TodoCounter'>You have completed all your tasks</h1>
          ) : (
              todoItems.length > 0 &&
               !loading &&   //el uso de loadiding es cuestionable
                <h1 className='TodoCounter'>        
                  Completed <span >{completedTodos}</span> of <span>{totalTodos}</span> Todos
                </h1>
              ) 
        }
      </>
    )
}

export { 
    TodoCounter 
}

/*
  los parentecis en la condicion sirven para agrupar no son necesarios pero son buena practica 
*/


//COMPONENTE CON ESTILOS EN LINEA  


// const estilos = {
//   fontSize: '24px',
//   textAline : 'center',
//   margin: 0,
//   padding: '48px',
// }

// function TodoCounter ({ total, completed }) {


//     return (
//       <h1 style={estilos}>
//         Has completado {completed} de {total} todos
//       </h1>
//     )
//   }

// export { 
//     TodoCounter 
// }


  /*
  exportacion nombrada:

  permite reducir los errores a la hora de importar en otro archivo 

  style recive las propiedades en forma de objeto 

  opcion 2 style inline 

   <h1 style={{backgroundColor: 'red'}}>
        Has completado {completed} de {total} todos
      </h1>
  */