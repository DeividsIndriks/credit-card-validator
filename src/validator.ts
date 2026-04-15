export function validateCardNumber(cardNumber: string): boolean {
  const digits = cardNumber.replace(/\D/g, '');

  // Per ISO/IEC 7812-1:2017 – valid card numbers are 10–19 digits
  if (digits.length < 10 || digits.length > 19) {
    return false;
  }

  const checkDigit = parseInt(digits.at(-1)!, 10);
  const cardNumberPayload = digits.slice(0, -1);

  let sum = 0;
  let shouldDouble = true;

  for (let i = cardNumberPayload.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumberPayload[i]!, 10);
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (10 - (sum % 10)) % 10 === checkDigit;
}