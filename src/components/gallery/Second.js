import React, { Component } from 'react';
class Second extends Component {
    render(){
        return (
            <div className="well">
                <h4>Num1: {this.props.num1}: and Num2 {this.props.num2}</h4>
            </div>
        )
    }
}

export default Second;