import { writable } from 'svelte/store';

export const isAuthenticated = writable<boolean>(false);

// Function to simulate authentication check
export async function checkAuth() {
  try{
    const response = await fetch('https:localhost:3000/api/check-auth');
    const data = await response.json();
    isAuthenticated.set(data.isAuthenticated);
  }catch(err){
    if(err){
      isAuthenticated.set(false)
    }
  }
}

// Function to log in the user
export async function login(username: string, password: string) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (data.success) {
    isAuthenticated.set(true);
    return true;
  }
  return false;
}

// Function to log out the user
export async function logout() {
  await fetch('/api/logout', {
    method: 'POST',
  });
  isAuthenticated.set(false);
}