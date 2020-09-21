const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;


const mutation = new GraphQLObjectType({

  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Song({ title })).save()
      }
    }
  }
});

module.exports = mutation;
