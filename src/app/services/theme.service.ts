import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // BehaviorSubject para mantener y compartir el estado del tema
  private themeSubject = new BehaviorSubject<string>(this.getInitialTheme());
  public theme$ = this.themeSubject.asObservable();

  constructor() {
    // Aplicar el tema al cargar el servicio
    this.applyTheme(this.themeSubject.value);
  }

  // Obtener tema inicial desde localStorage o usar 'light' por defecto
  private getInitialTheme(): string {
    return localStorage.getItem('theme') || 'light';
  }

  // Cambiar el tema
  toggleTheme(): void {
    const currentTheme = this.themeSubject.value;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.themeSubject.next(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // Aplicar el tema al documento
  private applyTheme(theme: string): void {
    document.body.setAttribute('data-bs-theme', theme);
  }

  // Verificar si el tema actual es claro
  isLightTheme(): boolean {
    return this.themeSubject.value === 'light';
  }
}