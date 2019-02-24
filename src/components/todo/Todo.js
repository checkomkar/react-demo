import React, { Component } from 'react';
import TodoList from './TodoList';
//import Todo from './ListItem';
class Todo extends Component {
    todotask = React.createRef();
    handleAddTodo = () => {
        //const todoTask = this.todotask.current.value;
        if(this.todotask.current.value !== null && this.todotask.current.value !== ''){
            let task = {name: this.todotask.current.value, status: "Incomplete"}
            this.props.addTodo(task);
            this.todotask.current.value = "";
        }else{
            alert("Please add task")
        }    
        
    }
    render(){
        return (
            <div className="well">
                <h3 className="page-header">
                    Todo App
                </h3>
                <div className="form-group">
                    Enter Event Name
                    <input type="text" ref={this.todotask} className="form-control"/>                    
                </div>
                <div className="form-group">
                    Enter Event Discription
                    <input type="text" ref={this.todotask} className="form-control"/>                    
                </div>
                <div className="form-group">
                    Enter Event Speaker
                    <input type="text" ref={this.todotask} className="form-control"/>                    
                </div>
                <button onClick={this.handleAddTodo} className="btn btn-primary">Add Task</button>
                <TodoList todoList={this.props.tasks} deleteTodo={this.props.deleteTodo}/>
            </div>
        )
    }
}

export default Todo;
