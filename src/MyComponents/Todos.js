import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
  let myStyle = {
    backgroundColor:"#f7f7e8",
    borderRadius:"2%",
    marginBottom:"20px",
    paddingTop:"15px",
    boxShadow:"8px 10px #D3D3D3",
    position:"relative"
  } 
  return (
    <div className="container" style={myStyle}>
        <h3 className='text-center'>Todos List</h3>
        {
          props.todos.length === 0?"No Todos to display":props.todos.map((item)=>{
                return <Todo todo={item} key={item.sno} onDelete={props.onDelete}/>
            })
        }
        
    </div>
  )
}
