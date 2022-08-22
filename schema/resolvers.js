const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (_, args) => {
      const { id } = args;
      const user = UserList.find((users) => users.id === Number(id));
      return user;
    },
    movies: () => {
      return MovieList;
    },
    movie: (_, args) => {
      const { name } = args;
      const movie = MovieList.find((movies) => movies.name === name);
      return movie;
    },
  },

  User: {
    favoriteMovies: () => {
      return MovieList.filter((movies) => movies.yearOfPublication >= 2009);
    },
  },
};

module.exports = { resolvers };
