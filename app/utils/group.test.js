import { groupBy } from './group';

describe('grouping utility', () => {
  it('should group items by weeks', () => {
    const data = [
      { id: 1, time: 1594038225 * 1000 },
      { id: 2, time: 1594158225 * 1000 },
    ];

    expect(groupBy(data, 'week').groups).toHaveLength(1);
    expect(groupBy(data, 'week').keys).toHaveLength(1);
    expect(groupBy(data, 'week').groups[0]).toHaveLength(2);
    expect(groupBy(data, 'week').keys[0]).toHaveLength(2);

    const data2 = [
      { id: 1, time: 1594038225 * 1000 },
      { id: 2, time: 1604158225 * 1000 },
    ];

    expect(groupBy(data2, 'week').groups).toHaveLength(2);
    expect(groupBy(data2, 'week').keys).toHaveLength(2);

    expect(groupBy(data2, 'week').groups[0]).toHaveLength(1);
    expect(groupBy(data2, 'week').keys[0]).toHaveLength(2);
    expect(groupBy(data2, 'week').groups[1]).toHaveLength(1);
    expect(groupBy(data2, 'week').keys[1]).toHaveLength(2);
  });
});
