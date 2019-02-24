import React, { Component } from 'react';


class Home extends Component{
    constructor(){
        super();
        this.fn = "Sachin";
        this.ln = "Tendulkar";
        this.customer = {
            name: 'Saurav', address: 'Kolkata'
        }

    }
    render() {
        //local variables
        let message = "Helo"
        return (
            <div>
                <h3 className="page-header">Home</h3>
                <h5>Local Variable: {message}</h5>
                <h5> Expressions: {2+89}</h5>
                <h5>JS Object : {this.customer.name}: {this.customer.address}</h5>
                
            </div>
        )
    }
}

export default Home;