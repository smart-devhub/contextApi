import React,{useContext,useState} from 'react'
import { TasklistContext } from '../context/TasklistContext'

const Taskform = () => {

    const {addtask}=useContext(TasklistContext)

    const [title,setTitle]=useState('')

    const handleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        addtask(title)
        setTitle(' ')
    }
    return (
        <div>
            <form  className="form" onSubmit={handleSubmit}>
                <input type="text" className="task-input"
                onChange={handleChange}
                required
                placeholder="Add Task..."
                />
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">Add Task</button>
                    <button type="submit" className="btn clear-btn">Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Taskform
