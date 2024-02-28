import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos =[
  { text: 'Cortar cebolla', compled: true},
  { text: 'Tomar el curso de Intro a React.js', compled: false},
  { text: 'Llora con la llorana', compled: false},
  { text: 'LALALALALALA', compled: false},
];

function App() { //esto es jsx no html
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList >
        {
          defaultTodos.map((todo,index) =>(
            < TodoItem 
              key = {index}
              text = {todo.text}
              compled = {todo.compled}
            
            />
          ))
        }
      </TodoList>
      
       <CreateTodoButton /> 

    </>
  );
}





export default App;
