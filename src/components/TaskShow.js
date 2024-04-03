import React, { useState } from "react";
import TaksCreate from "./TaksCreate";

export default function TaskShow({ tasks, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(tasks.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit=(id,updatedTitle,updatedTaskDesc)=>{
    setShowEdit(false);
    onUpdate(id,updatedTitle,updatedTaskDesc);
  }
  return (
    <div className="task-show">
      {showEdit ? (
        <TaksCreate task={tasks} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{tasks.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{tasks.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
