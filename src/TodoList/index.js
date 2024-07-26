import './TodoList.css';

function TodoList ({children}) { //children se encuentra dentro de props.children 
    return (
      <ul className= 'TodoList'>
        {
          children
        }
      </ul>
    )
  }

export {
    TodoList 
}

/*
react children:
  react transforma automaticamente todo lo que este dentro de nuestro componente en la propiedad children  
props.children = comunicacion entre componentes por medio de props 



 */