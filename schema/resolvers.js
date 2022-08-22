let { UserList, MovieList } = require("../FakeData");

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

  Mutation: {
    createUser: (_, args) => {
      let user = args.input;
      const id = UserList[UserList.length - 1].id + 1;
      user = { id, ...user };
      UserList.push(user);
      return user;
    },
    updateUsername: (_, args) => {
      const { id, username } = args.input;
      let updateUser;
      UserList.map((user) => {
        if (user.id == id) {
          user.username = username;
          updateUser = user;
        }
      });
      return updateUser;
    },
    deleteUser: (_, args) => {
      const { id } = args;
      UserList = UserList.filter((user) => user.id !== id);
    },
  },

  User: {
    favoriteMovies: () => {
      return MovieList.filter((movies) => movies.yearOfPublication >= 2009);
    },
  },
};

module.exports = { resolvers };
