import { preprocess, calculateWeek, timeToLocalDateFormat } from './date';

describe('date utility', () => {
  it('should preprocess data correctly', () => {
    const data = [{ id: 1, time: '1594038225' }];

    expect(preprocess(data)[0]).toHaveProperty('id');
    expect(preprocess(data)[0]).toHaveProperty('time');
    expect(preprocess(data)[0].id).toBe(1);
    expect(preprocess(data)[0].time).toBe(1594038225 * 1000);
  });

  it('should calculate week based on time', () => {
    const time = 1594038225 * 1000;
    const week = calculateWeek(time);

    expect(week[0] < week[1]).toBeTruthy();
    expect(time >= week[0] && time <= week[1]).toBeTruthy();

    expect(new Date(week[0]).getDay()).toBe(1);
    expect(new Date(week[1]).getDay()).toBe(0);

    expect(new Date(week[0]).toDateString()).toBe('Mon Jul 06 2020');
    expect(new Date(week[1]).toDateString()).toBe('Sun Jul 12 2020');
  });

  it('should display time in local date format', () => {
    const time = 1594038225 * 1000;

    expect(timeToLocalDateFormat(time)).toBe('7/6/2020');
  });
});
