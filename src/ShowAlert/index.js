import React from "react";
import './ShowAlert.css'
import { TodoContext } from '../TodoContext';

function ShowAlert() {
    const {showAlert} = React.useContext(TodoContext)
    return (
        <div className="Conteiner-Alert">
            <p>NO se puede agregar una tarea vacia</p>
            <button onClick={showAlert} >x</button>
        </div>
    )
    
}

export {ShowAlert}