import React,{createContext,useState} from 'react'
import {v4} from 'uuid'

export const TasklistContext=createContext()

const TasklistContextProvider=(props)=>{

    const [tasks,setTasks]=useState([])

    const [edititem,setedititem]=useState(null)

    //addtask
    const addtask=(title)=>{
        setTasks([...tasks,{task:title,id:v4()}])
    }

    const removetask=(id)=>{
        setTasks(tasks.filter(task=>task.id !==id))
    }

    const clearlist=()=>{
        setTasks([])
    }

    const findid=(id)=>{
        const itemid=tasks.find(task=>task.id===id) 
        
        
        setedititem(itemid)
    }

    const edittask=(title,id)=>{
        const newtask=tasks.map(task=>task.id===id ?{title,id}:task)
        setTasks(newtask)
    }

    return(
        <TasklistContext.Provider value={{tasks,addtask,removetask,clearlist,findid,edittask,edititem}}>
         {props.children}
        </TasklistContext.Provider>
    )
}

export default TasklistContextProvider