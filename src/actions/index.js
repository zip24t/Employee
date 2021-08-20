import * as types from './../constants/ActionTypes';

export const listAll=()=>{
	return {
		type:types.LIST_ALL
	}
}

export const addEmployee=employee=>{
	return {
		type:types.ADD_EMPLOYEE,
		employee
	}
}

export const removeEmployee=employee=>{
	return {
		type:types.REMOVE_EMPLOYEE,
		employee
	}
}