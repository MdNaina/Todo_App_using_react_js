import React from 'react';

const Todo = ({todo, setTodos, todos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el =>el.id !== todo.id))
    };

    const checkedHandler = () => {
        setTodos(todos.map(item =>{
            if(item.id == todo.id){
                item.completed = !item.completed
            }
            return item
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed? "completed":""}`}>{todo.text}</li>
            <button onClick={checkedHandler} className="check-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div> 
    )
}


export default Todo;