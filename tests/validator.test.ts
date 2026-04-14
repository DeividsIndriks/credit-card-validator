import { validateCardNumber } from '../src/validator.js';

describe('validateCardNumber', () => {
  it('should return true for a valid card number', () => {
    expect(validateCardNumber('4532015112830366')).toBe(true);
  });

  it('should return false for an invalid card number', () => {
    expect(validateCardNumber('1234567890123456')).toBe(false);
  });
});