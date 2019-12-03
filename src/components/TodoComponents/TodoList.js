import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {

        return(
            <div className="todo-list">
            {props.todolist.map(item => (
                <Todo key={item.id} item={item} toggleComplete={props.toggleComplete} />
            ))}
            <button onClick={props.clearCompleted}>Clear Complete</button>
            </div>
        )
}

export default TodoList;