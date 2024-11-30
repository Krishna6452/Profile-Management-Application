export const validateName = (name: string): boolean => name.length >= 3;
export const validateEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validateAge = (age?: number): boolean => (age ? age > 0 : true);
