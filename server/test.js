require("babel-core/register");
require("babel-polyfill");

const expect = require('chai').expect;
const request = require('supertest');
const app = require('./index');

describe('GET /graphql/execute', function() {
    it('must respond all employees', function(done) {
        var query = `
        query getEmployess{
            employees{
                _id
            }
        }
        `;

        request(app)
        .get('/graphql')
        .query({ query: query })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
            console.log(res.body);
            done();
        });
    });

    it('must add and return a new employee', function(done) {
        var query = `
        {
            "query": "mutation ($name: String!, $company_id: String!, $phone: String!) { createEmployee(name: $name, company_id: $company_id, phone: $phone) { _id } } ",
            "variables": { "name": "John Doe", "company_id": "OI123456", "phone": "21988887777"}
        }
        `;

        request(app)
        .post('/graphql')
        .set('Content-Type', 'application/json')
        .send(query)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
            console.log(res.body);
            done();
        });
    });
});
