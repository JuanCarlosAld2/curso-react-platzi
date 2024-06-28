import './TodoItem.css';

function TodoItem ({completed, text,  onComplete, onDelete}) {

    return (
      <li className= 'TodoItem'>
        <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={()=>onComplete(text)}>
          V
        </span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
        <span className ="Icon Icon-delete" onClick={()=>onDelete(text)}>
          X
        </span>
      </li>
    )
  }

export {
    TodoItem
}

