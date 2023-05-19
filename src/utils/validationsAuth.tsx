// src/utils/validationsAuth.tsx

import { ValidationErrors } from './validationsTypes';

export const validateCredentials = (email: string, password: string): ValidationErrors => {
    let errors: ValidationErrors = {};

    email = email.trim(); // removendo espaços em branco no início e no fim
    password = password.trim(); // removendo espaços em branco no início e no fim

    if (!email) {
        errors.email = "O campo Email não pode estar vazio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "O Email não é válido.";
    }

    if (!password) {
        errors.password = "O campo Senha não pode estar vazio.";
    } else if (password.length < 8) {
        errors.password = "A senha deve ter pelo menos 8 caracteres.";
    }

    // Aqui, você pode adicionar mais validações de acordo com suas necessidades
    // Como por exemplo, verificar a confiabilidade da senha

    return errors;
}
