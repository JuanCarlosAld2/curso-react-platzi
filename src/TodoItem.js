function TodoItem (props) {
    return (
      <li className= 'TodoItem'>
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    )
  }

export {
    TodoItem
}