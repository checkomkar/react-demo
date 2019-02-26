import React, { Component } from 'react';
import ListItem from './ListItem';
class Gallery extends Component {
    state = {
        isToggle: false
    }

    handleToggle = ()=>{
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    render(){
        let nameTemplate = null;
        if(this.state.isToggle) {
            nameTemplate = (
                <ul className="list-group">
                    {this.props.names.map((name, index) =>                        
                        <ListItem key={index} name={name}/>
                    )}
                </ul>
            )
                
            
        }else{
            nameTemplate = (
                <div>Empty</div>
            )
        }
        return (
            <div className="well">
                <h3 className="page-header">
                    List and Keys: Along with conditional rendering
                </h3>
                <button onClick={this.handleToggle} className="btn btn-primary">Toggle</button>
                 {/* {
                     this.state.isToggle?
                     <ul className="list-group">
                         {this.props.names.map((name, index) =>                        
                             <ListItem key={index} name={name}/>
                         )}
                     </ul>: null
                 } */}
                 {nameTemplate}
                
            </div>
        )
    }
}

export default Gallery;
