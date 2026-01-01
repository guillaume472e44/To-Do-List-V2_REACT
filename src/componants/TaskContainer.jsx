import { useState } from "react";

import Header from "./header/Header";
import TaskInput from "./taskInput/TaskInput";
import TaskList from "./taskList/TaskList";
import Footer from "./footer/Footer";

export default function TaskContainer() {
  const [taskList, setTasklist] = useState([]);

  function addTask(title) {
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title,
      completed: false,
    };
    setTasklist([...taskList, newTask]);
  }

  function editTask(id, completedValue) {
    setTasklist(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  }

  function deleteTask(e, id) {
    e.stopPropagation();
    setTasklist(taskList.filter((task) => task.id !== id));
  }

  function getTaskCount() {
    const completedTask = taskList.filter((task) => task.completed).length;
    const inCompletedTask = taskList.length - completedTask;
    return { completedTask, inCompletedTask };
  }
  const { completedTask, inCompletedTask } = getTaskCount();

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        taskList={taskList}
        editTask={editTask}
        deleteTask={deleteTask}
        inCompletedTask={inCompletedTask}
      />
      <Footer completedTask={completedTask} />
    </main>
  );
}
