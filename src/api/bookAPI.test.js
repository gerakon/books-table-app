import axios from 'axios';
import { fetchBooks } from './bookAPI';
import { API_URL } from './consts';

jest.mock('axios');

describe('fetchBook()', () => {
  describe('when props are not set', () => {
    it('should use the default props to request and return a books array', async () => {
      const data = { data: 'Mocked data' };
      axios.post.mockImplementationOnce(() => Promise.resolve(data));

      await expect(fetchBooks()).resolves.toEqual(data);
      expect(axios.post).toHaveBeenCalledWith(`${API_URL}/books`, { page: 1, itemsPerPage: 20, filters: [] });
    });
  });

  describe('when props are set', () => {
    it('should use the props to request and return a books array', async () => {
      const data = { data: 'Mocked data' };
      const props = { page: 10, itemsPerPage: 10, filters: ['test-filter'] };
      axios.post.mockImplementationOnce(() => Promise.resolve(data));

      await expect(fetchBooks(props)).resolves.toEqual(data);
      expect(axios.post).toHaveBeenCalledWith(`${API_URL}/books`, props);
    });
  });
});
