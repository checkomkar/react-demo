import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import First from './components/gallery/First';
import Second from './components/gallery/Second';
import Gallery from './components/gallery/Gallery';
import AddName from './components/gallery/AddName';
import Todo from './components/todo/Todo';
import Header from './components/layouts/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import NotFound from './components/not-found/NotFound';
import ProductDetails from './components/product/ProductDetails';
import Product from './components/product/Product';
class App extends Component {

    constructor(){
        super();
        this.firstName = "Sachin";
        this.lastName = "Tendulkar";
        this.emp = {
            city: "Mumbai",
            age: 23
        };
        this.names = ['Sachin', 'Saurav', 'Rahul']
        //Declare 2 variable
        this.num1 = 100;
        this.state = {
            num2: 200,
            names: ['Sachin', 'Saurav', 'Rahul'],
            //todo: [{name: "Task 1", status: "Incomplete"}]
            todo: [{eventName: "Task 1", eventDescription: '', speaker:'xyz',   status: "Incomplete"}]
        }
    }

    changeNum1 = () => {
        this.num1 = this.num1 +1
        console.log('Num1: '+ this.num1)
    }

    changeNum2 = () => {
        //2. Modification
        this.setState({
            num2: this.state.num2 + 1
        });
        console.log('Num2: '+ this.state.num2)
    }

    addProduct = () => {
        alert('Product added')
    }

    deleteProduct = (id)=> {
        alert('product deleted'+ id)
    }

    addName = (name) => {
        const names = this.state.names;
        names.push(name);
        this.setState({
            names: names
        })
    }


    addTodo = (task) => {
        const todo = this.state.todo;
        todo.push(task);
        this.setState({
            todo: todo
        })
    }

    deleteTodo = (index) => {
        const todo = this.state.todo;
        //todo.push(task);
        if (index > -1) {
            todo.splice(index, 1)
        }
        this.setState({
            todo: todo
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>                        
                    </div>
                    <div className="col-md-10 col-md-offset-1">
                        {/* <Home/> */}
                        {/* <About fName={this.firstName} lName={this.lastName} emp={this.emp}>
                            <div>
                                <h1>
                                    Passing View: Ads of Product : {this.firstName} 
                                </h1>
                                <p>
                                    10% discount on product
                                </p>
                            </div>
                        </About> */}
                        {/* <Contact addProduct={this.addProduct} 
                        deleteProduct= {(id) => this.deleteProduct(id)}/> */}
                        {/* <First changeNum1= {this.changeNum1} changeNum2= {this.changeNum2}/>
                        <Second num1={this.num1}  num2={this.state.num2}/>
                        <AddName addName={(name)=>this.addName(name)}/>
                        <Gallery names={this.state.names}/> */}
                        <Switch>
                            <Route path="/products/:id" component={ProductDetails}/>
                            <Route path="/products" component={Product}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/about"  component={()=><About 
                            fName={this.firstName} 
                            lName={this.lastName} emp={this.emp}/>}/>
                            <Route path="/gallery" component={()=><Gallery names={this.state.names}/>}/>
                            <Route path="/not-found" component={NotFound}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/todo" component={()=><Todo tasks={this.state.todo} addTodo={(task)=>this.addTodo(task)} 
                        deleteTodo={(index)=>this.deleteTodo(index)}/>}/>
                            <Route path="/" component={Home}/>
                            <Redirect to="/not-found"/>
                        </Switch>
                        {/* <Todo tasks={this.state.todo} addTodo={(task)=>this.addTodo(task)} 
                        deleteTodo={(index)=>this.deleteTodo(index)}/> */}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;
