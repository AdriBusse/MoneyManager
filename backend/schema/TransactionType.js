const graphql = require('graphql');

const{ GraphQLObjectType,GraphQLNonNull, GraphQLList, GraphQLString,GraphQLID, GraphQLInt, GraphQLSchema, GraphQLFloat}= graphql;
const Depot = require('../models/DepotModel')

const TransactionType = new GraphQLObjectType({
    name: 'Transaction', 
    fields: ()=>({
        id:{ type: GraphQLID},
        describtion:{ type: GraphQLString},
        amount:{type: GraphQLFloat},
        depot:{
            type: require('./DepotType'),
            resolve(parentValue, args){
                return Depot.findById({DepotId})
            }
        }
    })
})

module.exports= TransactionType;