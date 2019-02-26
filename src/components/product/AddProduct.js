import React, { Component } from 'react';
class AddProduct extends Component {
    productName = React.createRef()
    productCost = React.createRef()
    handleAddProduct = () => {
        let proObj = {
            name: this.productName.current.value,
            cost: this.productCost.current.value
        }

        this.props.addProduct(proObj);
        this.productName.current.value = '';
        this.productCost.current.value = '';
    }
    render(){
        return (
            <div className="col-md-6 col-md-offset-3">
                <div className="form-group">
                    Product Name
                    <input type="text" ref={this.productName} className="form-control"/>
                    Product Cost
                    <input type="text" ref={this.productCost} className="form-control"/>
                    <button onClick={this.handleAddProduct} className="btn btn-primary">Add</button>
                </div>
                
            </div>
        )
    }
}

export default AddProduct;