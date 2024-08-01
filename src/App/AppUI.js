import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import {renderTodos} from './renderTodos'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import React from 'react';
import { ShowModalCreate } from '../ShowModalCreate';
import { Alert } from '../Alert';
import { ShowAlert } from '../ShowAlert';
import './AppUI.css'

function AppUI() {

    const { openModal , openAlert} = React.useContext(TodoContext)

    return (
        <div className={openAlert ? 'App no-interaction' : 'App'}>
     
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

            {
              openAlert && (
                <Alert>
                  <ShowAlert/>
                </Alert>
              )
            }
    
        </div>
      );
}

export {AppUI};