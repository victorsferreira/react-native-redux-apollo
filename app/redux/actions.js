const Actions = {
    GET_EMPLOYEES: 'GET_EMPLOYEES',
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

export default Actions;
