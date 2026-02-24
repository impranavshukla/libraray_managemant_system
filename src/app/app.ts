import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavBar } from './admin/admin-nav-bar/admin-nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Libraray_Management_system');
}
