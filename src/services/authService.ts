import type { RegisterData, LoginData, AuthResponse, AuthError } from '../types/auth';

// Function to handle user registration
export async function register(data: RegisterData): Promise<AuthResponse | AuthError> {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const responseData: AuthResponse = await response.json();
    return responseData;
  } catch (error) {
    const errorMessage = (error as Error).message || 'Registration failed. Please try again.';
    return { message: errorMessage };
  }
}

// Function to handle user login
export async function login(data: LoginData): Promise<AuthResponse | AuthError> {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const responseData: AuthResponse = await response.json();
    return responseData;
  } catch (error) {
    const errorMessage = (error as Error).message || 'Login failed. Please check your credentials and try again.';
    return { message: errorMessage };
  }
}