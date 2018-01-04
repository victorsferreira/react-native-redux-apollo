import { GraphQLScalarType } from 'graphql';
import moment from 'moment';

module.exports = {
    Query: {
        employees: function(parent, args, context){
            return context.Employee.find({}).exec();
        }
    },
    Mutation: {
        createEmployee: async function(parent, args, context){
            var employee = await context.Employee(args).save();
            employee._id = employee._id.toString();

            return employee;
        },
        deleteEmployee: async function(parent, args, context){
            var result = await context.Employee.remove(args);
            return result.n > 0;
        }
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return value;
        },
        serialize(value) {
            return moment(value).valueOf().toString();
        },
        parseLiteral(ast) {
            return ast;
        },
    })
};
