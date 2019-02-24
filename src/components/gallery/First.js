import React, { Component } from 'react';
class First extends Component {
    render(){
        return (
            <div className="well">
                <button onClick={()=> this.props.changeNum1()}>Change num1</button>
                <button onClick={()=> this.props.changeNum2()}>Change Num2</button>
            </div>
        )
    }
}

export default First;