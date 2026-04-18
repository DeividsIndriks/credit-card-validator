export function normalizeCardNumber(cardNumber: string): string {
  return cardNumber.replace(/\D/g, '');
}
