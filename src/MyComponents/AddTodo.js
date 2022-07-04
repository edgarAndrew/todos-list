import React, { useState } from 'react'

export const AddTodo = (props) => {
    const[title,setTitle] = useState("")
    const[desc,setDesc] = useState("")
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc)
            alert("Title and description must be provided")
        else
            props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    let myStyle = {
        backgroundColor:"#f7f7e1",
        borderRadius:"2%",
        paddingTop:"10px",
        paddingBottom:"10px",
        boxShadow:"5px 8px #D3D3d3"
      } 
  return (
    <div className='container my-5 text-center' style={myStyle}>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="titleText" placeholder="Add title ..."/>
            </div>
            <div className="mb-3">
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="descText" placeholder="Add description ..."/>
            </div>
            <button type="submit" className="btn btn-danger">Done</button>
        </form>
    </div>
  )
}
