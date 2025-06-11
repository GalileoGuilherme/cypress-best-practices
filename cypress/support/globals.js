// Funções auxiliares para gerar dados dinâmicos
export function generateRandomEmail() {
  return `user_${Math.floor(Math.random() * 100000)}@example.com`;
}

export function generateRandomPassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Dados de usuário para cadastro
export const userDetails = {
  name: 'Test User',
  email: generateRandomEmail(),
  password: generateRandomPassword(),
  firstName: 'Test',
  lastName: 'User',
  company: 'Test Company',
  address1: '123 Test St',
  address2: 'Suite 101',
  country: 'United States',
  state: 'California',
  city: 'Los Angeles',
  zipcode: '90001',
  mobileNumber: '1234567890'
};
