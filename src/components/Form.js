import React from "react";
import App from "../App";
import TodoList from "./TodoList";

    
    const Form = ({inputText, setInputText, setTodos, todos, setStatus}) => {

        const inputTexthandler = (e) =>{
            setInputText(e.target.value);
        }

        const submitTodoHandler = (e) =>{
            e.preventDefault();
            setTodos([ 
                ...todos, 
                { text: inputText, completed: false, id: Math.random() * 1000 }
            ]);
            setInputText("");
        };

        const statusHandler = (e) => {
            setStatus(e.target.value)
        }

        return(
            <div className="form">
                <form>
                    <input onChange={inputTexthandler} type="text" className="todo=input"  value={inputText} />
                    <button onClick={submitTodoHandler} className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select onChange={statusHandler} name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Complete</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                    <div className="todo-container">
                        <ul className="todo-list"></ul>
                    </div>
                </form>
            </div>
        );
    }


export default Form;