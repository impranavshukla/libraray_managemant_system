import { RouterOutlet } from '@angular/router';
import { StudentNavBar } from '../student-nav-bar/student-nav-bar';
import { StudentFooter } from './../student-footer/student-footer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  imports: [StudentFooter,StudentNavBar,RouterOutlet],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css',
})
export class StudentDashboard {

}
