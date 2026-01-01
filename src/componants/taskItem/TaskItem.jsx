import "./TaskItem.css";

export default function TaskItem({ task, editTask, deleteTask }) {
  return (
    <li
      className={`${task?.completed ? "success" : ""}`}
      onClick={() => editTask(task.id, !task.completed)}
    >
      <div>
        <p> {task.id}.</p>
        <h3> {task.title} </h3>
      </div>
      <button onClick={(e)=>deleteTask(e,task.id)} >X</button>
    </li>
  );
}
