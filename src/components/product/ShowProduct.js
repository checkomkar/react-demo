import React, { Component } from 'react';
class ShowProduct extends Component {
    handleDeleteProduct = (id) => {
        
        this.props.delProduct(id);
        
    }
    render(){
        return (
            <div className="col-md-6 col-md-offset-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Cost
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((product, index)=> 
                                <tr key={index}>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.cost}
                                    </td>
                                    <td>
                                        <button onClick={()=>this.handleDeleteProduct(product.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ) 
                            
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default ShowProduct;