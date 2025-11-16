import { signal, effect } from '@angular/core';

export function useLocalStorage<T>(key: string, initial: T) {
  const stored = localStorage.getItem(key);
  const value = signal<T>(stored ? JSON.parse(stored) : initial);

  // Sync → localStorage
  effect(() => {
    localStorage.setItem(key, JSON.stringify(value()));
  });

  // Sync ← external changes (other tabs)
  window.addEventListener('storage', (e) => {
    if (e.key === key && e.newValue !== null) {
      value.set(JSON.parse(e.newValue));
    }
  });

  return value;
}
