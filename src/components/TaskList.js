import React from 'react'
import TaskShow from './TaskShow'

export default function TaskList({tasks,onDelete,onUpdate}) {

  return (
    <div className='task-list'>
        {tasks.map((tasks,index)=>{
            return(
                <TaskShow key={index} tasks={tasks} onDelete={onDelete} onUpdate={onUpdate}/>
            )
        })}
    </div>
  )
}
