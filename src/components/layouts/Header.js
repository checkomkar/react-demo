import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                </div>

                
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        
                        <li>
                            <Link to="/todo">Todo</Link>
                        </li>
                        
                    </ul>                    
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
    
}

export default Header;