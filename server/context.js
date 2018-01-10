import mongoose from 'mongoose';
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/oidigital-graphql');

const Employee = mongoose.model('Employee', {
    name: String,
    company_id: String,
    phone: String,
    team: { type: Schema.Types.ObjectId, ref: 'Team' }
});

const Team = mongoose.model('Team', {
    name: String,
    description: String
});

module.exports = {
    Employee: Employee,
    Team: Team
};
