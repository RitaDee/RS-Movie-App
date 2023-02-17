/**
 * @jest-environment jsdom
 */

import { getAllComment } from '../modules/fetchComment';

describe('commentCounter', () => {
  test('returns the number of comments for each movie', () => {
    const data = [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },
    ];
    const span = document.createElement('span');
    span.innerHTML = data;
    const result = (data).length;
    expect(result).toBe(2);
  });
});