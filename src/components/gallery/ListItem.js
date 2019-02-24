import React, { Component } from 'react';
class ListItem extends Component {
    render(){
        return (
            <li key={this.props.index} className="list-group-item">{this.props.name}</li>
        )
    }
}

export default ListItem;