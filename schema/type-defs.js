const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favoriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUsername(input: UpdateUsername!): User
    deleteUser(id: ID!): User
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality
  }

  input UpdateUsername {
    id: ID!
    username: String!
  }

  enum Nationality {
    CANADA
    INDIA
    BRAZIL
    GERMANY
    PAKISTAN
  }
`;

module.exports = { typeDefs };
