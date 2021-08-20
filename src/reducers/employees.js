import * as types from './../constants/ActionTypes';

var generateId=()=>{
    return (Math.random()*100); 
}	

var data= JSON.parse(localStorage.getItem('Employees'))
var initialState = data?data:[];

var myReducer=(state=initialState,action)=>{
	switch(action.type){
		case types.LIST_ALL:
			return state;
			break;
		case types.ADD_EMPLOYEE:
			var newEmployee={
				id:generateId(),
				txtEmail:action.employee.txtEmail,
				txtDepartment:action.employee.txtDepartment*1===0?'Freelancer':action.employee.txtDepartment*1===1?'UIT':'FPT'
			}
			state.push(newEmployee);
			localStorage.setItem('Employees',JSON.stringify(state));
			return [...state];
		case types.REMOVE_EMPLOYEE:
			console.log(state,action.employee)
			var newList=state.filter(function(e) { return e.id != action.employee; });
			console.log(newList)
			state=newList;
			localStorage.setItem('Employees',JSON.stringify(state));	
			return [...state];
		default: return state;
	}
	return state;
}

export default myReducer;