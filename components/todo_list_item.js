import React, { Component } from 'react';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing : false
    }
  }

  handleClickEdit() {
    this.setState({ isEditing: true });
  }

  handleClickCancel() {
    this.setState({ isEditing: false });
  }

  handleSave(e) {
    e.preventDefault();

    let oldTask = this.props.task;
    let newTask = this.refs.newValue.value;
    this.props.saveEditedTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

  renderButtons() {
    if(this.state.isEditing) {
      return(
        <td>
          <button onClick={ this.handleSave.bind(this) }>Save</button>
          <button onClick={ this.handleClickCancel.bind(this) }>Cancel</button>
        </td>
      );
    }

    return(
      <td>
        <button onClick={ this.handleClickEdit.bind(this) }>Edit</button>
        <button onClick={ this.props.handleDeleteTask.bind(this, this.props.task) }>Delete</button>
      </td>
    );
  }

  renderTaskColor() {
    const {task, done} = this.props;

    const taskColor = {
      color: done ? 'green' : 'red',
      cursor: 'pointer'
    };

    if(this.state.isEditing) {
      return(
        <td>
          <form onSubmit={ this.handleSave.bind(this) }>
            <input type="text" defaultValue={ task } ref="newValue" />
          </form>
        </td>
      );
    }

    return(
      <td
        style={ taskColor }
        onClick={ this.props.toggleTaskColor.bind(this, task) }
      >
        {task}
      </td>
    );
  }


  render() {
    return(
      <tr>
        {this.renderTaskColor()}
        {this.renderButtons()}
      </tr>
    )
  }
}
