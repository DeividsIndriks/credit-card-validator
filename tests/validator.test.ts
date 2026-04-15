import { validateCardNumber } from '../src/validator.js';

describe('validateCardNumber', () => {
  describe('valid card numbers', () => {
    it('should return true for a valid Visa card', () => {
      expect(validateCardNumber('4532015112830366')).toBe(true);
    });

    it('should return true for a valid Mastercard', () => {
      expect(validateCardNumber('5425233430109903')).toBe(true);
    });

    it('should return true for a card number with spaces', () => {
      expect(validateCardNumber('4532 0151 1283 0366')).toBe(true);
    });
  });

  describe('invalid card numbers', () => {
    it('should return false for an invalid card number', () => {
      expect(validateCardNumber('1234567890123456')).toBe(false);
    });

    it('should return false for an empty string', () => {
      expect(validateCardNumber('')).toBe(false);
    });

    it('should return false for a number that is too short', () => {
      expect(validateCardNumber('123456789012')).toBe(false);
    });
  });
});