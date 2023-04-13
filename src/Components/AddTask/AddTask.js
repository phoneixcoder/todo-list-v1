import React, { useState } from "react";
import './AddTask.css'
const AddTask = ({addTodo}) => {
  const [taskValue, setTaskValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskValue){
        addTodo(taskValue);
        setTaskValue('');
    }else{
        alert("Error: No value");
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="task"
          id=""
          value={taskValue}
          placeholder="What is the task today?"
          onChange={(e) => setTaskValue(e.target.value)}
          className="input-task"
        />
        <button type="submit" className="add-task-button">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
