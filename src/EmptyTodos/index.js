import './EmptyTodos.css';
import React from "react"
import task from './task.png'

function EmptyTodos() {
    return(
        <div className='Container-CreateTodos'>
            <img src={task} alt='task'/>
             <div className="list">
                <span>C</span>
                <span>r</span>
                <span>e</span>
                <span>a</span>
                <span>t</span>
                <span>e</span>{/*&nbsp es un espacio en blanco */}
                <span>&nbsp;</span>
                <span>a</span>
                <span>&nbsp;</span>
                <span>n</span>
                <span>e</span>
                <span>w</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>a</span>
                <span>s</span>
                <span>k</span>
            </div>

        </div>
    )
}

export {EmptyTodos}