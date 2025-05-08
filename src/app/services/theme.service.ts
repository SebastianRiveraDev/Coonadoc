import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(this.getInitialTheme());
  public theme$ = this.themeSubject.asObservable();

  constructor() {
    if (this.isBrowser()) {
      this.applyTheme(this.themeSubject.value);
    }
  }

  // Verificar si se está ejecutando en el navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  private getInitialTheme(): string {
    if (this.isBrowser()) {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light'; // valor por defecto en servidor
  }

  toggleTheme(): void {
    if (!this.isBrowser()) return;

    const currentTheme = this.themeSubject.value;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.themeSubject.next(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  private applyTheme(theme: string): void {
    if (this.isBrowser()) {
      document.body.setAttribute('data-bs-theme', theme);
    }
  }

  isLightTheme(): boolean {
    return this.themeSubject.value === 'light';
  }
}
