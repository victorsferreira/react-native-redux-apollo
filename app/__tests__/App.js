import 'react-native';
import React from 'react';
import App from '../App';
import Server from '../libs/server';
import GraphQL from '../libs/graphql'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <App />
    );
});

describe('Server connection with Axios using Promises', () => {
    var mock = {
        employee: {
            name: 'John Doe',
            company_id: 'OI000000',
            phone: '21988888888'
        }
    };

    it('Should load all employees', (done) => {
        return Server.getEmployees()
        .then(result => {
            expect(result.status).toBe(200);
            done();
        })
    });

    it('Should create a new employee', (done) => {
        return Server.createEmployee(mock.employee.name, mock.employee.company_id, mock.employee.phone)
        .then(result => {
            expect(result.status).toBe(200);
            done();
        })
    });

    it('Should get newly created employee', (done) => {
        return Server.getEmployees()
        .then(result => {
            var employees = result.data.data.employees;
            var found_employee = false;
            for(var employee of employees){
                if(employee.company_id == mock.employee.company_id){
                    found_employee = true;
                    break;
                }
            }

            expect(result.status).toBe(200);
            expect(found_employee).toBe(true);
            done();
        })
    });

    it('Should delete newly created employee', (done) => {
        return Server.deleteEmployee(mock.employee.company_id)
        .then(result => {
            expect(result.status).toBe(200);
            expect(result.data.data.deleteEmployee).toBe(true);
            done();
        })
    });
});

describe('Apollo Client using Promises', () => {
    it('Should load all employees', (done) => {
        return GraphQL.execute('query getAll { employees { _id } }')
        .then(result => {
            expect(typeof result.data === 'object').toBe(true);
            done();
        })
        .catch((err)=>{
            console.log('err', err)
        })
    });
});
