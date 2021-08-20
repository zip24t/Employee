import React, {Component} from 'react';

import EmployeeItem from './EmployeeItem';
import Form from './Form';
import {connect} from 'react-redux';
class Body extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var {employees}=this.props;
        var Employees=employees.map((Employee,index)=>{
            return <EmployeeItem key={Employee.id} employee={Employee}/>
        })
    return (
    <div className="container-fluid">
        <Form/>
        <div className="row">
            {Employees}
        </div>
    </div>
    );
}
}

const mapStateToProps=state=>{
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps,null)(Body);
