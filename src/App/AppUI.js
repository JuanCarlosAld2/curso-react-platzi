import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import {renderTodos} from './renderTodos'
import { TodoContext } from '../TodoContext';

function AppUI() {


    return (
        <>
     
          <TodoCounter/>
          <TodoSearch />

          <TodoContext.Consumer>
            {({
              searchTodoItems,completeTodo,deleteTodos,todoItems,loading,error
            })=>(
              <TodoList >
                {
                  renderTodos(searchTodoItems,completeTodo,deleteTodos,todoItems,loading,error)
                }
              </TodoList>
            )}

          </TodoContext.Consumer>
    
          
          <TodoContext.Consumer>
            {({
              loading
            })=>(
              <CreateTodoButton 
              loading={loading} 
            /> 
            )}
          </TodoContext.Consumer>
    
        </>
      );
}

export {AppUI};