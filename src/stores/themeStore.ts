import { writable } from 'svelte/store';
import { THEME_VALUE } from '../types/theme';
import type { THEME } from "../types/theme"
// Function to get the default theme from localStorage
const getInitialTheme = (): THEME => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('theme') as THEME) || THEME_VALUE.LIGHT;
  }
  return THEME_VALUE.LIGHT
};

// Create a writable store with the initial theme
const themeStore = writable<THEME>(getInitialTheme());

// Subscribe to the store and apply the theme to the document
themeStore.subscribe((value: THEME) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
    document.documentElement.classList.toggle('dark', value === THEME_VALUE.DARK);
  }
});

// Export the store and a function to toggle the theme
export { themeStore };

// Function to toggle the theme
export function toggleTheme() {
  themeStore.update(current => current === THEME_VALUE.LIGHT ? THEME_VALUE.DARK : THEME_VALUE.LIGHT);
}