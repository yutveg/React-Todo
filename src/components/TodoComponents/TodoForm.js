import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
        <form onSubmit={this.props.handleSubmit}>
             <input type="text" name="item" value={this.props.name} onChange={this.props.handleChanges} />
             <button>Add Todo</button>
         </form>
        ) 
    }
}

export default TodoForm;