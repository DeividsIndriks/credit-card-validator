export type CardType =
  | 'Visa'
  | 'Mastercard';

const CARD_PATTERNS: { type: CardType; pattern: RegExp }[] = [
  { type: 'Visa',       pattern: /^4[0-9]{12}(?:[0-9]{3}){0,2}$/ },
  { type: 'Mastercard', pattern: /^(5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12})$/ },
];

export function getCardType(cardNumber: string): CardType | null {
  const digits = cardNumber.replace(/\D/g, '');

  for (const { type, pattern } of CARD_PATTERNS) {
    if (pattern.test(digits)) {
      return type;
    }
  }

  return null;
}
