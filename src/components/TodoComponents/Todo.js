import React from 'react';

class Todo extends React.Component {
    render(){
        return (
            <div className={`item${this.props.item.completed ? ' completed' : ''} `} id={this.props.item.id} onClick={this.props.toggleComplete} >
                <p>{this.props.item.name}</p>
            </div>
        )
    }
}

export default Todo;