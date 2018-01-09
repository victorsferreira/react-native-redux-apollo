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

        return Server.get(query);
    }

    static createEmployee(name, company_id, phone){
        var payload = `
        {
            "query": "mutation ($name: String!, $company_id: String!, $phone: String!) { createEmployee(name: $name, company_id: $company_id, phone: $phone) { _id, company_id, name, phone } } ",
            "variables": { "name": "${name}", "company_id":  "${company_id}", "phone":  "${phone}"}
        }
        `;

        return Server.post(payload);
    }

    static deleteEmployee(company_id){
        var payload = `
        {
            "query": "mutation ($company_id: String!) { deleteEmployee(company_id: $company_id) } ",
            "variables": { "company_id":  "${company_id}"}
        }
        `;

        return Server.post(payload);
    }

    static post(payload){
        return axios({
            method: 'POST',
            url: Server.URL,
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload
        }).catch(Server.error);
    }

    static get(query){
        return axios({
            method: 'GET',
            url: Server.URL,
            params: {
                query: query
            }
        }).catch(Server.error);
    }

    static error(e){
        console.log('Default error',e);
    }

}

export default Server;
