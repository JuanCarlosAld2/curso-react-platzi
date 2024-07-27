import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import {renderTodos} from './renderTodos'

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

    return (
        <>
     
          <TodoCounter 
            todoItems={todoItems}
            completed={completedTodos} 
            total={totalTodos}
            loading={loading}
          
          />
          <TodoSearch 
            todoItems={todoItems}
            loading={loading}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList >
            {
             renderTodos(searchTodoItems,completeTodo,deleteTodos,todoItems,loading,error)
            }
          </TodoList>
          
          <CreateTodoButton 
            loading={loading} 
          /> 
    
        </>
      );
}

export {AppUI};