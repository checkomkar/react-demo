import React, { Component } from 'react';
class AddName extends Component {
    taskname = React.createRef();
    handleAddName = () => {
        const taskName = this.taskname.current.value;
        this.props.addName(taskName);
    }
    render(){
        return (
            <div className="col-md-6 col-md-offset-3">
                Enter Name 
                <input type="text" ref={this.taskname} className="form-control"/>
                <button type="button" onClick={this.handleAddName} className="btn btn-success">Add</button>
            </div>
        )
    }
}

export default AddName;