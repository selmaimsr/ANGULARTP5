import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <nav style="padding: 10px; background: #f0f0f0; margin-bottom: 20px;">
      <a routerLink="/home" style="margin-right: 15px;">Home</a>
      <a routerLink="/about">About</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class App {
  name = 'tp5';
}