import { getCardType } from '../src/cardType.js';

describe('getCardType', () => {
  describe('Visa', () => {
    it('should return Visa for a 13-digit card', () => {
      expect(getCardType('4532015112830')).toBe('Visa');
    });

    it('should return Visa for a 16-digit card', () => {
      expect(getCardType('4111111111111111')).toBe('Visa');
    });

    it('should return Visa for a 19-digit card', () => {
      expect(getCardType('4532015112830366123')).toBe('Visa');
    });
  });

  describe('Mastercard – 51-55 block range', () => {
    it('should return Mastercard for a card starting with 51 (lower boundary)', () => {
      expect(getCardType('5105105105105100')).toBe('Mastercard');
    });

    it('should return Mastercard for a card starting with 53 (middle of range)', () => {
      expect(getCardType('5301250070000191')).toBe('Mastercard');
    });

    it('should return Mastercard for a card starting with 55 (upper boundary)', () => {
      expect(getCardType('5555555555554444')).toBe('Mastercard');
    });
  });

  describe('Mastercard – 2221-2720 block range', () => {
    it('should return Mastercard for a card starting with 2221 (lower boundary)', () => {
      expect(getCardType('2221000000000009')).toBe('Mastercard');
    });

    it('should return Mastercard for a card starting with 2500 (middle of range)', () => {
      expect(getCardType('2500000000000004')).toBe('Mastercard');
    });

    it('should return Mastercard for a card starting with 2720 (upper boundary)', () => {
      expect(getCardType('2720000000000006')).toBe('Mastercard');
    });
  });

  describe('Unknown card type', () => {
    it('should return null for a 16-digit card starting with 6 (Discover-like)', () => {
      expect(getCardType('6011111111111117')).toBeNull();
    });

    it('should return null for a card starting with 2220 (just below Mastercard range)', () => {
      expect(getCardType('2220000000000007')).toBeNull();
    });

    it('should return null for a card starting with 2721 (just above Mastercard range)', () => {
      expect(getCardType('2721000000000005')).toBeNull();
    });
  });

  describe('Invalid length', () => {
    it('should return null for an empty string', () => {
      expect(getCardType('')).toBeNull();
    });

    it('should return null for a card that is too short', () => {
      expect(getCardType('411111')).toBeNull();
    });

    it('should return null for a card that is too long (more than 19 digits)', () => {
      expect(getCardType('41111111111111111111')).toBeNull();
    });
  });
});
