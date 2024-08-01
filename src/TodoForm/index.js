import './TodoForm.css'
import { TodoContext } from '../TodoContext';
import React from "react";

function TodoForm() {

    const {ActiveModalTodoCreator,addTodo, showAlert,} = React.useContext(TodoContext);

    //Estado local 
    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (event) =>{
        event.preventDefault();
        if(!newTodoValue) return showAlert()
        addTodo(newTodoValue)
        ActiveModalTodoCreator()
        
    }

    const onCancel = () => {

        ActiveModalTodoCreator()
    }

    const onChange= (event) =>{
        const textSave= event.target.value 
        setNewTodoValue(textSave)
    }

    return(
        <form className='Container-Modal-form' onSubmit={onSubmit}>
            <label>Write a new task TODO</label>
            <textarea placeholder='Cortar cebolla para el almuerzo' value={newTodoValue} onChange={onChange}/>

            <div className='Container-buttons-form'>
                <button className='TodoForm-button TodoForm-button--cancel' type='button' onClick={onCancel}>Cancel</button> 
                <button className='TodoForm-button TodoForm-button--add' type='submit'>Add</button>    
            </div> 

        </form>
    )
}

export {TodoForm}