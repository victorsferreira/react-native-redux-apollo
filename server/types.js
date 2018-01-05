module.exports = `
scalar Date

type Employee{
    _id: String!,
    name: String!,
    company_id: String!,
    phone: String!
}

type Query{
    employees: [Employee!]!
    employee(name: String): Employee
}

type Mutation{
    createEmployee(name: String!, company_id: String!, phone: String!): Employee!
    deleteEmployee(company_id: String!): Boolean!
}
`;
