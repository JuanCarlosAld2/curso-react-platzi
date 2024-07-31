import './CreateTodoButton.css'
import { CreateTodoButtonLoading } from '../CreateTodoButtonLoading'
import { TodoContext } from '../TodoContext';
import React from 'react'


function CreateTodoButton ({loading}) {

    const {ActiveModalTodoCreator} = React.useContext(TodoContext)

    return (
        <>
            {
                loading && <CreateTodoButtonLoading/>
            }
            {
                !loading &&
                <button className= 'CreateTodoButton' onClick={(event)=>{
                    ActiveModalTodoCreator()
                }}>+</button>
            }
        </>
        
    )
}

export {
    CreateTodoButton
}


/*
   event
                       //console.log('me diste clik')
                    //console.log(event)
                    //console.log(event.target);
                    //console.log(event.target.class);
*/
/*
-- Todo lo que comieze en on en react es un  evento
-- si se quiere pasar una funcion directamente se debe colocar dento de una funcion 
*/