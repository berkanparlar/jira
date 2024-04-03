import { useState } from "react";
import "./App.css";
import TaksCreate from "./components/TaksCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks=tasks.filter((tasks)=>{
      return tasks.id!==id
    });
    setTasks(afterDeletingTasks);
  };


  const editTaskById= (id,updatedTitle,updatedTaskDesc)=>{
    const updateTask=tasks.map((tasks)=>{
      if(tasks.id === id)
      {
        return{id,title:updatedTitle,taskDesc:updatedTaskDesc}
      }
      return tasks;
    })
    setTasks(updateTask);
  }
  return (
    <div className="App">
      <TaksCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
