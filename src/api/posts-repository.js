import Repository from './repository';
import GetObjectData from '../store/helpers/get-object-data';

const resource = '/posts';

export default {
  async get() {
    try {
      const fetchedPosts = await Repository.get(resource);
      const fetchedPostsData = GetObjectData(fetchedPosts);

      return fetchedPostsData;
    } catch (error) {
      console.log('Fetching data failed...', error);
    }
  },
};
