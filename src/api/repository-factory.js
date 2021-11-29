import PostsRepository from './posts-repository';
import UsersRepository from './users-repository';

const repositories = {
  posts: PostsRepository,
  users: UsersRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
