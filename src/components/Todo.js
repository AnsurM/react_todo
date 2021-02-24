import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"}>
      <input
        type="checkbox"
        className="checkbox-large"
        defaultChecked={todo.isCompleted}
        onClick={(e) => toggleTodo(e, index)}
      ></input>
      <span className={`${todo.isCompleted ? "complete" : ""}`}>
        {todo.text}
      </span>
      <div className="icons">
        {/* <button disabled={todo.isCompleted} onClick={() => completeTodo(index)}>
          Complete
        </button> */}
        <button className="btn" onClick={() => deleteTodo(index)}>
          <FontAwesomeIcon icon={faTrash} size={"lg"} color="silver" />
        </button>
      </div>
    </div>
  );
}
