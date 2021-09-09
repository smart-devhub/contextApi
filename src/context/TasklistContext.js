import React,{createContext,useState} from 'react'
import {v4} from 'uuid'

export const TasklistContext=createContext()

const TasklistContextProvider=(props)=>{

    const [tasks,setTasks]=useState([
        {id:1,task:'Read the book'},
        {id:2,task:"wash the car"},
        {id:3,task:"write some code"}
    ])

    //addtask
    const addtask=(title)=>{
        setTasks([...tasks,{task:title,id:v4()}])
    }

    return(
        <TasklistContext.Provider value={{tasks,addtask}}>
         {props.children}
        </TasklistContext.Provider>
    )
}

export default TasklistContextProvider