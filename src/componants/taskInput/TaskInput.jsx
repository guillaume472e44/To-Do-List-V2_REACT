import { useState } from "react";
import "./TaskInput.css";

export default function TaskInput({ addTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleInput(e) {
    setTaskTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskInput">✍️ Ajoutez votre prochaine tâche</label>
        <div className="input-Btn_container">
          <input
            onChange={handleInput}
            value={taskTitle}
            type="text"
            id="taskInput"
            placeholder="Indiquez un titre de tâche explicite"
            autoComplete="off"
          />
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
}
