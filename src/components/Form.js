import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class Form extends Component{

    constructor(props){
        super(props);
        this.state={
                id:0,
                txtEmail:'',
                txtDepartment:0
        }
    }

    onChangeInput=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
                [name]:value
        });
    }
    
    onHandleSubmit=(event)=>{
        event.preventDefault();
        this.props.onAddEmployee(this.state)
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm mới</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="txtEmail" onChange={this.onChangeInput}/>
                        </div>
                        <div className="form-group">
                            <label>Phòng ban</label>
                            <select name="txtDepartment" className="form-control" value={this.state.txtDepartment} required="required" onChange={this.onChangeInput}>
                                <option value={0}>Freelancer</option>
                                <option value={1}>UIT</option>
                                <option value={2}>FPT</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
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
        onAddEmployee: (employee)=>{
            dispatch(actions.addEmployee(employee));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
