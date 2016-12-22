import React, { Component } from 'react';
import CreateTodo from './create_todo';
import Todo from './todo';

let todos = [
{
  task: 'Build TodoApp with React',
  done: false
},
{
  task: 'Study Full Stack React',
  done: true
}
]

export default class TodoApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>React Todo App</h1>
        <CreateTodo createNewTask={ this.createNewTask.bind(this) }/>
        <Todo 
          todos={ this.state.todos } 
          toggleTaskColor={ this.toggleTaskColor.bind(this) }
          saveEditedTask={ this.saveEditedTask.bind(this) } 
          handleDeleteTask={ this.handleDeleteTask.bind(this) } />
      </div>
    )
  }

  createNewTask(task) {
    let new_task = {
      task,
      done: false
    };
    this.setState({ todos: this.state.todos.concat([new_task]) });
  }

  toggleTaskColor(task) {
    let foundTodo = this.state.todos.find((todo) => todo.task === task);
    foundTodo.done = !foundTodo.done;
    this.setState({ todos: this.state.todos }); 
  }

  saveEditedTask(oldTask, newTask) {
    let foundTodo = this.state.todos.find((todo) => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  } 

  handleDeleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}

