import React, { Component } from 'react';
import FormErrors from '../layouts/FormErrors';
class Login1 extends Component {
    state ={
        email:'',
        password: '',
        formErrors:{
            email:'',
            password: ''
        },
        emailValid: false,
        passwordValid: false,
        formValid: false
    }
    taskname = React.createRef();
    handleLogin = () => {
        
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log("submitted", this.state)
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                emailValid: emailValid,
                passwordValid: passwordValid
            }, this.validateForm);
      }

    render(){
        return (
            <div className="col-md-6 col-offset-3">
                <h2 className="page-header">Welcome</h2>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" value={this.state.email} 
                        onChange={(event)=>this.handleUserInput(event)}
                        onBlur={(event)=>this.handleUserInput(event)}
                        className="form-control" name="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" 
                        onChange={(event)=>this.handleUserInput(event)}
                        onBlur={(event)=>this.handleUserInput(event)}
                        value={this.state.password}  className="form-control" />
                    </div>
                    <button className="btn btn-primary" type="submit">Login</button>
                </form>
                
            </div>
        )
    }
}

export default Login1;