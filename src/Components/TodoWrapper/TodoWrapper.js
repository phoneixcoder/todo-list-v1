import React, { useState } from "react";
import "./todowrapper.css";
import AddTask from "../AddTask/AddTask";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, complete: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : todo));
    console.log("COmplete")
  }

  const editTodo = (id) => {
    setTodos(
        todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));
  }
  return (
    <div className="main-container">
      <h2>Things to be done today!</h2>
      <AddTask addTodo={addTodo} />

    {todos.map((todo) => {
        return (
            <Todo key={todo.id} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete}/>
        );
    })}

    </div>
  );
};

export default TodoWrapper;
