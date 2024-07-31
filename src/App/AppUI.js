import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import {renderTodos} from './renderTodos'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import React from 'react';
import { ShowModalCreate } from '../ShowModalCreate';

function AppUI() {

    const { openModal,loading} = React.useContext(TodoContext)

    return (
        <>
     
          <TodoCounter/>
          <TodoSearch />
          <TodoContext.Consumer>
            {/*Render functions */}
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


            {
              openModal && (
                <Modal>
                  <ShowModalCreate/>
                </Modal>
              )
            }
    
        </>
      );
}

export {AppUI};