
import React, { Component } from 'react'
import { FormErrors } from './FormError';

class SignUp extends Component {
    state = { 
        email:'',
        password:'',
        formErrors:{email:'',password:''},
        emailValid:false,
        passwordValid:false,
        formValid:false
     }
     handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
        console.log(this.state);
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
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    render() { 
        return (
            <div  className="col-md-6 col-md-offset-3 ">
                {/* <div className="panel panel-default alert alert-danger"> */}
            <FormErrors formErrors={this.state.formErrors} />
            {/* </div> */}
        
            <form className="well ">
             <h2 className="page-header">Sign Up</h2>
             <div className="form-group">
              <label>Email</label>
              <input type="email" value={this.state.email}
              onChange={(event) => this.handleUserInput(event)} 
              className="form-control" name="email"/>
             </div>
             <div className="form-group">
              <label>Password</label>
              <input type="password" 
              onChange={(event) => this.handleUserInput(event)}
              value={this.state.password} 
              className="form-control" name="password"/>
             </div>            

            <button type="submit" className="btn btn-primary" 
                    disabled={!this.state.formValid}>Sign up</button>
            </form>
            </div>
          );
    }
}
 
export default SignUp;