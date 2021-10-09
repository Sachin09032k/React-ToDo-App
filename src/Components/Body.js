import React from "react";
import "./body.css";
import { useState } from "react";
import TodoList from "./TodoList";

function Body() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Todo cannot be empty.");
    } else {
      addTodo(title);
      setTitle("");
    }
  };

  const addTodo = (title) => {
    console.log(title);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  return (
    <div id="main">
      <h1 id="heading">ToDo List</h1>
      <form id="form" onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter the todos."
          id="input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit" id="submit">
          Add
        </button>
      </form>

      <h2 id="list">Todo List:</h2>
      {todos.length === 0
        ? <p id='list2'>No Todos to display.</p>
        : todos.map((todo) => {
            return(
                <TodoList todo={todo} key={todo.sno} onDelete={onDelete} />
            )
          })}
    </div>
  );
}

export default Body;
