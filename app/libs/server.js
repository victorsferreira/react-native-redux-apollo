import axios from 'axios';

class Server{
    static URL = "http://192.168.1.105:8080/graphql";

    static getEmployees(){
        var query = `
        query allEmployees{
            employees{
                _id,
                company_id,
                name,
                phone
            }
        }
        `;

        return axios({
            method: 'GET',
            url: Server.URL,
            params: {
                query: query
            }
        });
    }

    static createEmployee(name, company_id, phone){
        var payload = `
        {
            "query": "mutation ($name: String!, $company_id: String!, $phone: String!) { createEmployee(name: $name, company_id: $company_id, phone: $phone) { _id, company_id, name, phone } } ",
            "variables": { "name": "${name}", "company_id":  "${company_id}", "phone":  "${phone}"}
        }
        `;

        return axios({
            method: 'POST',
            url: Server.URL,
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload
        });
    }

    static deleteEmployee(company_id){
        var payload = `
        {
            "query": "mutation ($company_id: String!) { deleteEmployee(company_id: $company_id) } ",
            "variables": { "company_id":  "${company_id}"}
        }
        `;

        return axios({
            method: 'POST',
            url: Server.URL,
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload
        });
    }

}

export default Server;
