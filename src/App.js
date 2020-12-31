import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList'
import { BrowserRouter as Router} from 

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [status, setStatus] = useState("all")

  useEffect(() =>{
    getLocalTodo();
  },[])

  useEffect(()=>{
    filterTodoHandler();
    setLocalHandler();
  },[status,todos])

  const setLocalHandler = () =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodo = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]))
    }else{
      let LocalTodo = JSON.parse(localStorage.getItem('todos'))
      setTodos(LocalTodo)
    }
  }

  const filterTodoHandler = () =>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo =>todo.completed === true))
        break;
      case "incompleted":
        setFilteredTodos(todos.filter(todo =>todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
    }
  }

  return(
    <div>
      <header>
        <h1>Naina's Todo</h1>
      </header>
      <Form 
        inputText = {inputText}
        setInputText= {setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus = {setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  )
}

export default App;
