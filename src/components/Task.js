import React,{useContext} from 'react'
import { TasklistContext } from '../context/TasklistContext'


export const Task = ({task}) => {
    const {removetask,findid}=useContext(TasklistContext)

    return (
        <div>
            <li className="list-item">
                <span>{task.task}</span>
                <div>
                    <button className="btn-delete task-btn" onClick={()=>removetask(task.id)}>
                      <i className="fas fa-trash-alt"></i>  
                    </button>
                    <button className="btn-edit task-btn" onClick={()=>findid(task.id)}>
                      <i className="fas fa-pen"></i>  
                    </button>
                </div>
            </li>
        </div>
    )
}
