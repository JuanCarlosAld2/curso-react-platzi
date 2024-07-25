import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import './TodoItem.css';

function TodoItem ({completed, text, onComplete, onDelete}) {

    return (
      <li className= 'TodoItem'>
        <CompleteIcon
          completed={completed}
          onComplete={onComplete}
          text={text}
        />
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
        <DeleteIcon
          onDelete={onDelete}
          text={text}
        />
      </li>
    )
  }

export {
    TodoItem
}

