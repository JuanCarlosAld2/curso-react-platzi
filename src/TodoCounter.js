// COMPONENTE CON HOJA CSS 

import './TodoCounter.css';

function TodoCounter ({ total, completed }) {


    return (
      <h1 >
        Has completado {completed} de {total} todos
      </h1>
    )
  }

export { 
    TodoCounter 
}




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