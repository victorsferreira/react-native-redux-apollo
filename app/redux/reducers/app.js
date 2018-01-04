import Actions from '../actions';

var initial_state = {
    employees: []
};

export default function(state=initial_state, action){
    switch(action.type){
        case Actions.GET_EMPLOYEES: {
            return Object.assign({}, state, {employees: action.payload.employees});
        }
        case Actions.CREATE_EMPLOYEE: {
            var employees = state.employees;
            employees.push(action.payload.employee);
            return Object.assign({}, state, {employees: employees});
        }
        case Actions.DELETE_EMPLOYEE: {
            var company_id = action.payload.company_id;
            var employees = state.employees;

            var employee;
            for(var k in employees){
                employee = employees[k];
                if(employee.company_id == company_id){
                    employees.splice(k, 1);
                    break;
                }
            }

            return Object.assign({}, state, {employees: employees});
        }
    }

    return state;
}
