import React, { Component } from 'react';
import TodoRowItems from './TodoRowItems';
import TodoThead from './TodoThead';
//import Todo from './ListItem';
class TodoList extends Component {
    render(){
        return (
            <div className="">
                <table className="table">
                    <TodoThead />
                    <tbody>
                        {
                            this.props.todoList.map((item, index) =>                       
                        
                        <TodoRowItems key={index} index={index} item={item} 
                        deleteTodo={this.props.deleteTodo}/>
                        )
                        }                        
                        
                    </tbody>
                    
                </table>
                
            </div>
        )
    }
}

export default TodoList;
