import React, { Component } from 'react';
class NotFound extends Component {
    taskname = React.createRef();
    handleAddName = () => {
        const taskName = this.taskname.current.value;
        this.props.addName(taskName);
    }
    render(){
        return (
            <div className="col-md-6 col-md-offset-3">
                Not Found
                
            </div>
        )
    }
}

export default NotFound;