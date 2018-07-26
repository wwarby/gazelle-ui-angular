import { ShortTimePipe } from './short-time.pipe';

describe('ShortTimePipe', () => {

  it('create an instance', () => {
    const pipe = new ShortTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('works for zero', () => {
    const pipe = new ShortTimePipe();
    expect(pipe.transform(0)).toBe('0:00');
  });

  it('works for single digit seconds', () => {
    const pipe = new ShortTimePipe();
    expect(pipe.transform(8)).toBe('0:08');
  });

  it('works for double digit seconds', () => {
    const pipe = new ShortTimePipe();
    expect(pipe.transform(22)).toBe('0:22');
    expect(pipe.transform(20)).toBe('0:20');
    expect(pipe.transform(59)).toBe('0:59');
  });

  it('works for single digit minutes', () => {
    const pipe = new ShortTimePipe();
    expect(pipe.transform(60)).toBe('1:00');
    expect(pipe.transform(61)).toBe('1:01');
    expect(pipe.transform(142)).toBe('2:22');
  });

  it('works for double digit minutes', () => {
    const pipe = new ShortTimePipe();
    expect(pipe.transform(600)).toBe('10:00');
    expect(pipe.transform(601)).toBe('10:01');
    expect(pipe.transform(700)).toBe('11:40');
    expect(pipe.transform(1426)).toBe('23:46');
  });

  it('works for hours', () => {
    const pipe = new ShortTimePipe();
    expect(pipe.transform(3600)).toBe('1:00:00');
    expect(pipe.transform(3601)).toBe('1:00:01');
    expect(pipe.transform(3661)).toBe('1:01:01');
    expect(pipe.transform(4377)).toBe('1:12:57');
    expect(pipe.transform(79382)).toBe('22:03:02');
    expect(pipe.transform(304837)).toBe('84:40:37');
    expect(pipe.transform(5929682)).toBe('1647:08:02');
  });

  it('preserves negatives', () => {
    const pipe = new ShortTimePipe();
    expect(pipe.transform(-1)).toBe('-0:01');
    expect(pipe.transform(-72)).toBe('-1:12');
    expect(pipe.transform(-4377)).toBe('-1:12:57');
  });

  it('fails gracefully', () => {
    const pipe = new ShortTimePipe();
    expect(pipe.transform(null)).toBe('0:00');
    expect(pipe.transform(undefined)).toBe('0:00');
    expect(pipe.transform(NaN)).toBe('0:00');
  });

});
