import { sum, asyncFunc } from './will-remove';

describe('Test Of Function Sum', () => {
  test('Sum of Two value', () => {
    expect(sum(3, 4)).toBe(7);
  });

  test('Define', () => {
    expect(sum(3, 4)).toBeDefined();
  });
});

describe('Test Async', () => {
  const value = 'test';
  test('Should return async value', async () => {
    const result = await asyncFunc(value);
    expect(result).toBe(value);
  });
});
