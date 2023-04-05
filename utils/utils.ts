export function formatPhoneNumber(phoneNumber: string | number): string {
  const cleanedNumber = phoneNumber.toString().replace(/\D/g, '');

  if (cleanedNumber.length !== 11) {
    return phoneNumber.toString();
  }

  const formattedNumber = cleanedNumber.replace(
    /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
    '8 ($2) $3-$4-$5'
  );
  return formattedNumber;
}
