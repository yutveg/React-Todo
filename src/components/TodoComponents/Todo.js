import React from 'react';

const Todo = (props) => {
        return (
            <div className={`item${props.item.completed ? '-completed' : ''} `} id={props.item.id} onClick={props.toggleComplete} >
                <p>{props.item.name}</p>
            </div>
        )
}

export default Todo;