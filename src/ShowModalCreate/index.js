import './ShowModalCreate.css'
import {TodoForm} from '../TodoForm'
import React from "react";
import { TodoContext } from '../TodoContext';

function ShowModalCreate() {
    const {openAlert} = React.useContext(TodoContext)
    return(
        <div className={openAlert ? 'Container-Modal no-interaction' : 'Container-Modal' }>
            <TodoForm/>

        </div>
    )
    
}



export {ShowModalCreate}


/*<div className='Container-Modal-form'>

</div> */