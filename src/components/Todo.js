export default function Todo({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      <input
        type="checkbox"
        defaultChecked={todo.isCompleted}
        onClick={(e) => toggleTodo(e, index)}
      ></input>
      {todo.text}
      <div>
        {/* <button disabled={todo.isCompleted} onClick={() => completeTodo(index)}>
          Complete
        </button> */}
        {/* <button onClick={() => deleteTodo(index)}>Delete</button> */}
        <button className="btn btn-primary" onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}
