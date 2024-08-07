import { TodoItem } from '../TodoItem';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos' ;
import { TaskNotFound } from '../TaskNotFound';

const renderTodos = (searchTodoItems,completeTodo,deleteTodos,todoItems,loading,error) => {
  
    if(loading) return <> <TodosLoading/><TodosLoading/><TodosLoading/> </>
    if(error) return <TodosError/>
    if (!loading && todoItems.length === 0) {
      return <EmptyTodos/>;
    } else if (!loading && searchTodoItems.length === 0) {
      return <TaskNotFound/>;
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

  export {renderTodos}