import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {

    render(){
        return(
            <div className="todo-list">
            {this.props.todolist.map(item => (
                <Todo key={item.id} item={item} toggleComplete={this.props.toggleComplete} />
            ))}
            <button onClick={this.props.clearCompleted}>Clear Complete</button>
            </div>
        )
    }
}

export default TodoList;