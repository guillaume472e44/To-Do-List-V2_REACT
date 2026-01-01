import TaskItem from "../taskItem/TaskItem";
import "./TaskList.css";

export default function TaskList({taskList, editTask, deleteTask, inCompletedTask,}) {

  const tasksList = taskList.map((task)=> <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} /> )

  return (
    <div className="box">
      <h2>
        {!taskList.length && <span>Aucune tâche à afficher...</span>}
        {taskList.length > 0 && (<span>Il reste {inCompletedTask} tâche{inCompletedTask > 1 ? "s" : ""}</span>)}
      </h2>
        {taskList && taskList.length > 0 && (
          <ul>
            {tasksList}
          </ul>
        ) }
    </div>
  );
}
