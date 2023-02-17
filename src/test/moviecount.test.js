/**
 * @jest-environment jsdom
 */

import movieCount from '../modules/total.js';

describe('movieCount', () => {
  test('returns an array of movie items and updates the num element', () => {
    const Movies = {
      children: [
        { title: 'Movie 1' },
        { title: 'Movie 2' },
        { title: 'Movie 3' },
      ],
    };

    const num = document.createElement('div');
    num.id = 'movie-counter';

    const result = movieCount(Movies, num);

    expect(result).toEqual(Movies.children);
    expect(num.innerText).toBe(3);
  });
});