module.exports = `
scalar Date

type Employee{
    _id: String!,
    name: String!,
    company_id: String!,
    phone: String!,
    team: Team,
    is_manager: Boolean!
}

type Team{
    _id: String!,
    name: String!,
    description: String
}

type Query{
    employees: [Employee!]!
    employee(_id: String): Employee
    teams: [Team!]!
    team(_id: String): Team
}

type Mutation{
    createEmployee(name: String!, company_id: String!, phone: String!): Employee!
    deleteEmployee(_id: String!): Boolean!
    createTeam(name: String!, description: String): Team!
    deleteTeam(_id: String!): Boolean!
    assignTeamToEmployee(employee_id: String!, team_id: String!): Boolean!
}
`;
