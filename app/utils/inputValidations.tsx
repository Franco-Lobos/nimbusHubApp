export function validateEmail(email: string): string | undefined {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      return "Invalid email address";
    }
  
    return undefined; // Valid email
  }
  
export function validatePassword(password: string): string | undefined {
    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (!passwordRegex.test(password)) {
      return "Password must include an uppercase letter, a lowercase letter, and a digit.";
    }
  
    return undefined; // Valid password
  }