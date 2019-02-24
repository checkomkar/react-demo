import React, { Component } from 'react';

class Contact extends Component {

    constructor(){
        super();
        this.handleClickMe = this.handleClickMe.bind(this);
        this.displayData = this.displayData.bind(this)
    }

    handleClickMe(){
        alert("hello world");
    }

    handleClickMeAgain(){
        alert("Hello world Again Called")
    }

    displayData = (a) => {
        alert("Data"+ a)
    }

    //Child component function: which will call Parent Functions
    handleAddProduct = () => {
        this.props.addProduct();
    }

    handleDeleteProduct = () => {
        this.props.deleteProduct(100);
    }

    render() {
        return (
            <div>
                <h4>how to use lamda</h4>
                
                <button onClick={this.handleClickMe} className="btn btn-primary">
                    click me
                </button>
                <button onClick={this.handleClickMeAgain} className="btn btn-primary">
                    click me Again
                </button>
                <button onClick={()=>this.displayData(200)} className="btn btn-primary">
                    Display data
                </button>
                <br/><br/>
                <h4>How to use bind method</h4>
                <button onClick={this.handleClickMe.bind(this)} className="btn btn-primary">
                    using bind bad 
                </button>
                <button onClick={this.handleClickMe} className="btn btn-primary">
                    using bind
                </button>
                <h4>Pass parameter</h4>
                <button onClick={this.displayData.bind(this, 250)} className="btn btn-primary">
                    using bind bad 
                </button>
                <button onClick={()=>this.displayData(350)} className="btn btn-primary">
                    using bind
                </button>
                <h4>How to use bind method</h4>
                <h5>First Way</h5>
                <button onClick={this.handleAddProduct} className="btn btn-success">
                    Add Product
                </button>
                <button onClick={this.handleDeleteProduct} className="btn btn-success">
                    Del Product
                </button>
                <h5>First Way</h5>
                <button onClick={()=> this.props.addProduct()} className="btn btn-success">
                    Add Product
                </button>
                <button onClick={()=> this.props.deleteProduct(200)} className="btn btn-success">
                    Del Product
                </button>
            </div>
        );
    }
}

export default Contact;