import React from "react";
import todoList from "./todoList.css";

function TodoList(props) {
  return (
    <div>
      <div id="todolist">
        <p>
          {props.todo.title}
          <span
            onClick={() => {
              props.onDelete(props.todo);
            }}
          >
            X
          </span>
        </p>
      </div>
    </div>
  );
}

export default TodoList;
