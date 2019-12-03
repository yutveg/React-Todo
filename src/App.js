import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList';

const Todos = [
  {
    name: 'Learn setState()',
    id: 2362727,
    completed: false
  },
  {
    name: 'Style TodoList',
    id: 1231516,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {Todos: Todos};
  }
  
  clearCompleted = () => {
    console.log('hi')
    this.setState(this.state.Todos.filter(item => item.completed === false))
  }

  toggleComplete = (e) => {
    console.log(e.currentTarget.id)
    this.setState(this.state.Todos.map(item => item.id === e.currentTarget.id ? {name: item.name, id: item.id, completed: !item.completed} : console.log(item.id)))
  }
 //
  addNewItem = (newItemText) => {
      const newItem = {
        name: newItemText,
        id: Date.now(),
        completed: false
      };
      this.setState({
        Todos: [...this.state.Todos, newItem]
      });
  }

  handleChanges = (e) => {
    this.setState({
        newItem: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addNewItem(this.state.newItem);
    this.setState({newItem: ''});
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleSubmit={this.handleSubmit} handleChanges={this.handleChanges}  />
        <TodoList todolist={this.state.Todos} toggleComplete={this.toggleComplete} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
