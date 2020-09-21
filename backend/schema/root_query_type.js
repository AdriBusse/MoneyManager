const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
      //add all fields in your schema
      /*
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return Song.find({});
      }
    }*/
  })
});

module.exports = RootQuery;
