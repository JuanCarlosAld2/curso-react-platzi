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

props.children = comunicacion entre componentes por medio de props 



 */