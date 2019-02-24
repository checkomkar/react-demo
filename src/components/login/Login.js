import React, { Component } from 'react';
class Login extends Component {
    taskname = React.createRef();
    handleAddName = () => {
        const taskName = this.taskname.current.value;
        this.props.addName(taskName);
    }
    render(){
        return (
            <div className="col-md-6 col-md-offset-3">
                Login
                
            </div>
        )
    }
}

export default Login;