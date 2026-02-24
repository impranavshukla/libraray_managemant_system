import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { AdminNavBar } from '../admin-nav-bar/admin-nav-bar';
import { AdminFooter } from '../admin-footer/admin-footer';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterOutlet,AdminNavBar,AdminFooter],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

}
