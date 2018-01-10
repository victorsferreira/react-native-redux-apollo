import { GraphQLScalarType } from 'graphql';
import moment from 'moment';

module.exports = {
    Query: {
        employees: function(parent, args, context){
            return context.Employee.find({}).populate('team').exec();
        },
        employee: function(parent, args, context){
            return context.Employee.findOne(args).populate('team').exec();
        },
        teams: function(parent, args, context){
            return context.Team.find({}).exec();
        },
        team: function(parent, args, context){
            return context.Team.findOne(args).exec();
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
        },
        createTeam: async function(parent, args, context){
            var team = await context.Team(args).save();
            team._id = team._id.toString();

            return team;
        },
        deleteTeam: async function(parent, args, context){
            var result = await context.Team.remove(args);
            return result.n > 0;
        },
        assignTeamToEmployee: async function(parent, args, context){
            var employee_id = args.employee_id;
            var team_id = args.team_id;

            // var result = await context.Employee.update({_id: employee_id}, {$set: {team_id: team_id}});
            var result = context.Employee.update({_id: employee_id}, {$set: {team_id: team_id}}).exec();
            return result.then((result)=>{
                return result.n > 0;
            }).catch((err)=>{
                console.log('err', err)
            });
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
