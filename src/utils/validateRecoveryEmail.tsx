import { ValidationErrors } from './validationsTypes';

export const validateRecoveryEmail = (email: string): ValidationErrors => {
  let errors: ValidationErrors = {};

  email = email.trim();

  if (!email) {
    errors.email = 'O campo Email não pode estar vazio.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'O Email não é válido.';
  }

  return errors;
};
