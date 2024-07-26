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
    todoItems,
    loading,
    error
}) {
    const renderTodos = () => {
        if (!loading && todoItems.length === 0) {
          return <h2>Add a new task</h2>;
        } else if (!loading && searchTodoItems.length === 0) {
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
            {loading && <p>Estamos cargando</p>}
            {error && <p>Desespérate, hubo un error!!</p>}
            {
             renderTodos()
            }
          </TodoList>
          
           <CreateTodoButton /> 
    
        </>
      );
}

export {AppUI};