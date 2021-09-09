import React,{useContext} from 'react'
import { TasklistContext } from '../context/TasklistContext'

export const Verification = () => {
    const {tasks}=useContext(TasklistContext)

    return (
        <div>
            {tasks.map(task=>{
                return(
                    <div key={task.id}>
                        <h1>{task.task}</h1>
                    </div>
                )
            })}
        </div>
    )
}
