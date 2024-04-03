import React, { useState } from "react";

export default function TaksCreate({ onCreate, task, taskformUpdate,onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //sayfa yenilenmiyor
    if(taskformUpdate){
        onUpdate(task.id,title,taskDesc)
    }
    else{
        onCreate(title, taskDesc);
    }
    
    setTaskDesc("");
    setTitle("");
  };
  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Task Düzenleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlıgı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Düzenleyiniz</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="task-button update-button" onClick={handleSubmit}>
              Düzenle   
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task giriniz</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
