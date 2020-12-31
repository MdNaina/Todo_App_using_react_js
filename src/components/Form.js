import React from 'react'


const Form = ({inputText , setInputText, todos, setTodos, setStatus}) =>{

    const inputHandler=(e)=> {
        setInputText(e.target.value)
    };

    const todoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, {text:inputText, completed:false, id:Math.random()*1000}]);
        setInputText('')
    };
    const filterHandler = (e) =>{
        setStatus(e.target.value)
    }
    return(
        <form>
            <input onChange={inputHandler} value={inputText} type="text" className="todo-input"/>
            <button onClick={todoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;