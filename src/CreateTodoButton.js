import './CreateTodoButton.css'

function CreateTodoButton () {
    return (
        <button className= 'CreateTodoButton' onClick={(event)=>{
            console.log('me diste clik')
            console.log(event)
            console.log(event.target);
            console.log(event.target.class);
        }}>+</button>
    )
}

export {
    CreateTodoButton
}
/*
-- Todo lo que comieze en on en react es un  evento
-- si se quiere pasar una funcion directamente se debe colocar dento de una funcion 
*/