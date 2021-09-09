import React,{useContext,useState,useEffect} from 'react'
import { TasklistContext } from '../context/TasklistContext'

const Taskform = () => {

    const {addtask,clearlist,edititem,edittask}=useContext(TasklistContext)

    const [title,setTitle]=useState('')

    const handleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(edititem==null){
            addtask(title)
            setTitle("")

        }else{
            edittask(title,edititem.id)
        }

       
    }
    useEffect(()=>{
      if(edititem !==null){
          setTitle(edititem.title)
          console.log(title);
      }else{
          setTitle(" ")
      }
    },[])
    return (
        <div>
            <form  className="form" onSubmit={handleSubmit}>
                <input type="text" className="task-input"
                onChange={handleChange}
                required
                placeholder="Add Task..."
                value={title}
                />
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">Add Task</button>
                    <button type="submit" className="btn clear-btn" onClick={clearlist}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Taskform
