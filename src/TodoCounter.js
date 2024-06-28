// COMPONENTE CON HOJA CSS 

import './TodoCounter.css';

function TodoCounter ({ total, completed }) {

  // console.log(completed);
    return (
      <>
        {
          total === completed ? (
            <h1 className='TodoCounter'>You have completed all your tasks</h1>
          ) : (
                <h1 className='TodoCounter'>        
                  Completed <span >{completed}</span> of <span>{total}</span> Todos
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