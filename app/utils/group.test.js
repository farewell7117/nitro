import { group } from './group';

describe('grouping utility', () => {
  it('should group items by weeks', () => {
    const data = [
      { id: 1, time: 1594038225 * 1000 },
      { id: 2, time: 1594158225 * 1000 },
    ];

    expect(group(data, 'week').items).toHaveLength(1);
    expect(group(data, 'week').keys).toHaveLength(1);

    expect(group(data, 'week').items[0]).toHaveLength(2);

    const data2 = [
      { id: 1, time: 1594038225 * 1000 },
      { id: 2, time: 1604158225 * 1000 },
    ];

    expect(group(data2, 'week').items).toHaveLength(2);
    expect(group(data2, 'week').keys).toHaveLength(2);

    expect(group(data2, 'week').items[0]).toHaveLength(1);
    expect(group(data2, 'week').items[1]).toHaveLength(1);
  });

  it('should group items by author', () => {
    const data = [
      { id: 1, author: 'Herbert George Wells' },
      { id: 2, author: 'Herbert George Wells' },
    ];

    expect(group(data, 'author').items).toHaveLength(1);
    expect(group(data, 'author').keys).toHaveLength(1);

    expect(group(data, 'author').items[0]).toHaveLength(2);

    const data2 = [
      { id: 1, author: 'Herbert George Wells' },
      { id: 2, author: 'Jules Verne' },
    ];

    expect(group(data2, 'author').items).toHaveLength(2);
    expect(group(data2, 'author').keys).toHaveLength(2);

    expect(group(data2, 'author').items[0]).toHaveLength(1);
    expect(group(data2, 'author').items[1]).toHaveLength(1);
  });

  it('should group items by location', () => {
    const data = [
      { id: 1, location: 'Dublin city' },
      { id: 2, location: 'dublin city' },
    ];

    expect(group(data, 'location').items).toHaveLength(1);
    expect(group(data, 'location').keys).toHaveLength(1);

    expect(group(data, 'location').items[0]).toHaveLength(2);

    const data2 = [
      { id: 1, location: 'Dublin' },
      { id: 2, location: 'London' },
    ];

    expect(group(data2, 'location').items).toHaveLength(2);
    expect(group(data2, 'location').keys).toHaveLength(2);

    expect(group(data2, 'location').items[0]).toHaveLength(1);
    expect(group(data2, 'location').items[1]).toHaveLength(1);
  });
});
