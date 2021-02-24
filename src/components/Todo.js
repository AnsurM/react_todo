import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
        <button className="btn btn-light" onClick={() => deleteTodo(index)}>
          <FontAwesomeIcon icon={faTrash} size={"lg"} color="red" />
        </button>
      </div>
    </div>
  );
}
