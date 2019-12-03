import React from 'react';
import './Todo.css';

const Todo = (props) => {
        return (
            <div className={`item${props.item.completed ? ' completed' : ''} `} id={props.item.id} onClick={() => props.toggleComplete(props.item.id)} >
                <p>{props.item.name}</p>
            </div>
        )
}

export default Todo;