import "./App.css";
import {Header} from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo"
import {About} from "./MyComponents/About"
import React,{useState,useEffect} from 'react'; // are react hooks

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo = null;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (key) => {
    setTodos(todos.filter((e)=>{
      return e.sno !== key;
    }));
    //localStorage.setItem("todos",JSON.stringify(todos))
  }
  const addTodo = (tit,des)=>{
    const obj = {
      sno: (todos.length>0?todos[todos.length-1].sno+1:1),
      title:tit,
      desc:des
    }
    setTodos([...todos,obj]); // using hooks to update array
  }
  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  
  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={false} />
        <Routes>
          <Route path="/todos-list" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;