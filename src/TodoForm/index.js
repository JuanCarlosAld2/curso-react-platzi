import './TodoForm.css'
import { TodoContext } from '../TodoContext';
import React from "react";

function TodoForm() {

    const {ActiveModalTodoCreator,addTodo } = React.useContext(TodoContext);

    //Estado local 
    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (event) =>{
        event.preventDefault();
        if(!newTodoValue) return alert('no existe tarea a guardar')
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
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder='Cortar cebolla para el almuerzo' value={newTodoValue} onChange={onChange}/>
            <div className='Container-buttons-form'>
                <button className='TodoForm-button TodoForm-button--cancel' type='button' onClick={onCancel}>cancelar</button> 
                <button className='TodoForm-button TodoForm-button--add' type='submit'>agregar</button>    
            </div> 

        </form>
    )
}

export {TodoForm}