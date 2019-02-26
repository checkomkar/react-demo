import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddProduct from './AddProduct';
import ShowProduct from './ShowProduct';
class Product extends Component {
    state = { products: []}
    serviceUrl = "http://localhost:3002/products/";
    componentDidMount(){
        this.getProducts();
    }
    getProducts = () => {
        axios.get(this.serviceUrl).then((response)=>{
            this.setState({
                products: response.data
            })
        })
    }

    addProduct = (product) => {
        axios.post(this.serviceUrl, product).then((response)=> {
            this.getProducts();
            alert('product Added');
        })
    }

    delProduct = (id) => {
        axios.delete(this.serviceUrl+id).then((response)=> {
            this.getProducts();
            alert('product Deleted');
        })
    }

    render(){
        return (
            <div>
                <h1 className="page-header">Manage Products</h1>
                <AddProduct addProduct={(product)=>this.addProduct(product)}/>
                <ShowProduct products={this.state.products} delProduct={this.delProduct}/>
            </div>
        )
    }
    
    
}

export default Product;