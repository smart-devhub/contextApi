import React,{useContext} from 'react'
import { TasklistContext } from '../context/TasklistContext'
import { Task } from './Task'

function Tasklist() {
    const {tasks}=useContext(TasklistContext)
    return (
        <div>
            <ul className="list">
                {tasks.map((task)=>{
                    return(
                        <Task task={task} />
                    )
                })}
            </ul>
            
        </div>
    )
}

export default Tasklist
