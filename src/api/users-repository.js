import Repository from './repository';
import GetObjectData from '../store/helpers/get-object-data';

const resource = '/users';

export default {
  async get() {
    try {
      const fetchedUsers = await Repository.get(resource);
      const fetchedUsersData = GetObjectData(fetchedUsers);

      return fetchedUsersData;
    } catch (error) {
      console.log('Fetching data failed...', error);
    }
  },
};
