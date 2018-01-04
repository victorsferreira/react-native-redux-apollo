import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/oidigital-graphql');

const Employee = mongoose.model('Employee', {
    name: String,
    company_id: String,
    phone: String
});

module.exports = {
    Employee: Employee
};
