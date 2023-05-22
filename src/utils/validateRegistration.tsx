import { ValidationErrors } from "./validationsTypes";

export function validateRegistration(username: string, email: string, password: string, confirmPassword: string): ValidationErrors {
  const errors: ValidationErrors = {};

  // 1 - Size of the password
  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  // 2 - Password match
  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  // 3 - Field empty
  if (!username.trim()) {
    errors.username = "Username is required.";
  }
  if (!email.trim()) {
    errors.email = "Email is required.";
  }
  if (!password.trim()) {
    errors.password = "Password is required.";
  }
  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Confirm password is required.";
  }

  // 4 - Valid email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = "Invalid email format.";
  }

  // 5 - Regex for email (optional)
  // Add additional email validation if needed using regex

  // 6 - Normalize lowerCase for username and email
  username = username.toLowerCase();
  email = email.toLowerCase();

  // 7 - Remove spaces with trim
  username = username.trim();
  email = email.trim();

  return errors;
}
