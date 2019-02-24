import React, { Component } from 'react';
import ListItem from './ListItem';
class Gallery extends Component {
    render(){
        return (
            <div className="well">
                <h3 className="page-header">
                    List and Keys
                </h3>
                <ul className="list-group">
                    {this.props.names.map((name, index) =>
                    
                    <ListItem key={index} name={name}/>
                    )}
                </ul>
            </div>
        )
    }
}

export default Gallery;
