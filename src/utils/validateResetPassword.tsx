import { ValidationErrors } from '../utils/validationsTypes';

const validateResetPassword = (password: string, confirmPassword: string): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!password) {
    errors.password = 'Campo obrigatório';
  } else if (password.length < 6) {
    errors.password = 'A senha deve ter no mínimo 6 caracteres';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Campo obrigatório';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'As senhas não coincidem';
  }

  return errors;
};

export default validateResetPassword;
