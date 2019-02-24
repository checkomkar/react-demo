import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
    
    return(
        <div className="well">
            <h3 className="page-header">
                Props: paretn to child                 
            </h3>
            <h5>
                FirstName : {props.fName} Lname : {props.lName}
            </h5>
            <h5>
                Emp Info : {props.emp.city} {props.emp.age}
            </h5>
            {props.children}
        </div>
    )
    
}

About.propTypes = {
    fName: PropTypes.string,
    lName: PropTypes.string,
    emp: PropTypes.shape({
        city: PropTypes.string,
        age: PropTypes.number
    })
}

export default About;