import React from "react";
import negado from './negado.png'
import './TaskNotFound.css'

function TaskNotFound() {
    return (
        <div className="Container-Not-Found">
            <img src={negado} alt="Imagen de negado" />
            <p>Task not found</p>   
        </div>
    )
    
}

export {TaskNotFound}