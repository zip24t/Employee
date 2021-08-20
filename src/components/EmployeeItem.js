import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class EmployeeItem extends Component{
         
    onHandleRemove=()=>{
        this.props.onRemoveEmployee(this.props.employee.id)
    }

    render(){
        var {employee}=this.props;
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card p-3">
                    <input type="checkbox"/> <label>{employee.txtEmail} - {employee.txtDepartment}</label>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button type="button" className="btn btn-info text-light">Sửa</button>&nbsp;
                                <button type="button" className="btn btn-danger text-light" onClick={this.onHandleRemove}>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return {

    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return {
        onRemoveEmployee: (employee)=>{
            dispatch(actions.removeEmployee(employee));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeItem);
