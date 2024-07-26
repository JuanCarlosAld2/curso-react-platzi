import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchTodoItems,
    completeTodo,
    deleteTodos,
    todoItems
}) {
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
}

export {AppUI};