import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Coonadoc';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isLightTheme(): boolean {
    return this.themeService.isLightTheme();
  }
}