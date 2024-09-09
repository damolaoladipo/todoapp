import React from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          completeTodo={() => completeTodo(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
