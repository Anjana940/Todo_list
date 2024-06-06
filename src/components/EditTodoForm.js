import React, {useState} from 'react'

export const EditTodoform =({editTodo, task}) => {
    const [value, setValue] = useState("")
    const handleSubmit=e=>{
        e.preventDefault();
        editTodo(value, task.id);
    }
  return (
    <form className ='Todoform' onSubmit = {handleSubmit}>
        <input type="text" className='todo-input' 
        placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
        <button type='Submit' className='todo-btn'> Update Task</button>
         </form>
  )
}