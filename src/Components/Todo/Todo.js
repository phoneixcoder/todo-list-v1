import React from "react";
import edit from "../../Resources/images/edit.png";
import removed from "../../Resources/images/removed.png";
import "./Todo.css";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    const handleCLick = () => {
        toggleComplete(task.id)
        var element = document.getElementById("task");
        element.classList.remove("incomplete")
        element.classList.add("complete"); 
    }
    return (
    <div className="main-container-todo">
      <div className="Todo" onClick={handleCLick}>
        <p
          className={`incomplete`}
          id = "task"
        >
          {task.task}
        </p>
        <div className="image-class">
          <img src={edit} alt="Edit Task" onClick={() => editTodo(task.id)} />
          <img
            src={removed}
            alt="Delete Task"
            onClick={() => deleteTodo(task.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
