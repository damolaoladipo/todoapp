import React from "react";

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={completeTodo}>
        {todo.isCompleted ? "Undo" : "Complete"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
