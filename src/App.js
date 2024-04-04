import { useEffect, useState } from "react";
import "./App.css";
import TaksCreate from "./components/TaksCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3002/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3002/tasks");
    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3002/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((tasks) => {
      return tasks.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3002/tasks/${id}`,{title:updatedTitle,taskDesc:updatedTaskDesc});
    const updateTask = tasks.map((tasks) => {
      if (tasks.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return tasks;
    });
    setTasks(updateTask);
  };
  return (
    <div className="App">
      <TaksCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
