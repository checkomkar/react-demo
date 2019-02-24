import React, { Component } from 'react';
class TodoRowItems extends Component {
    handleDeleteTodo = () => {
        //const todoTask = this.todotask.current.value;
        alert('Are you sure?')
        this.props.deleteTodo(this.props.index)     
        
    }
    render(){
        return (
            <tr>
                <td>
                    {this.props.index +1}
                </td>
                <td>
                    {this.props.item.name}
                </td>
                <td>
                    {this.props.item.status}
                </td>
                <td>
                    <button onClick={this.handleDeleteTodo} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default TodoRowItems;