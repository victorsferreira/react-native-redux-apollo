import axios from 'axios'
import Server from '../libs/server';

const Actions = {
    GET_EMPLOYEES: 'GET_EMPLOYEES',
    SET_EMPLOYEES: 'SET_EMPLOYEES',
    CREATE_EMPLOYEE: 'CREATE_EMPLOYEE',
    DELETE_EMPLOYEE: 'DELETE_EMPLOYEE'
}

export function createEmployee(employee){
    return {
        type: Actions.CREATE_EMPLOYEE,
        payload: {employee: employee}
    };
}

export function getEmployees(employees){
    return {
        type: Actions.GET_EMPLOYEES,
        payload: {employees: employees}
    };
}

export function deleteEmployee(company_id){
    return {
        type: Actions.DELETE_EMPLOYEE,
        payload: {company_id: company_id}
    };
}

function setEmployees(employees){
    return {
        type: Actions.SET_EMPLOYEES,
        payload: {employees: employees}
    };
}

export function getEmployeesAsync(){
    return function(dispatch){
        return Server.getEmployees()
        .then((result)=>{
            dispatch(setEmployees(result.data.data.employees));
        })
        .catch((err)=>{
            console.log('err', err)
        });
    }
}

export default Actions;
