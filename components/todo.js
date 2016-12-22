import React, { Component } from 'react';
import _ from 'lodash';
import TodoListHeader from './todo_list_header';
import TodoListItem from './todo_list_item';


export default class Todo extends Component {
  todoList(){
    const props = _.omit(this.props, 'todos');

    return this.props.todos.map((todo, index) => {
      return( <TodoListItem 
        key= {index} 
        {...todo} 
        {...props} /> 
      );
    })
  }

  render() {
    return (
      <table>
        <TodoListHeader />
        <tbody>
          {this.todoList()}
        </tbody>
      </table>
    )
  }
}
