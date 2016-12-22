import React, { Component } from 'react';

export default class CreateTodo extends Component {
  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
      	<input type="text" placeholder="Enter to do...." ref="new_task_element" />
      	<button>Create</button>
      </form>
    )
  }

  handleSubmit(e) {
  	e.preventDefault();

 		this.props.createNewTask(this.refs.new_task_element.value);
 		this.refs.new_task_element.value = '';
  }
}
