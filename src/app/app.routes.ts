import { Routes } from '@angular/router';
import { StudentDashboard } from './student/student-dashboard/student-dashboard';
import { StudentHome } from './student/student-home/student-home';
import { StudentBrowseBooks } from './student/student-browse-books/student-browse-books';
import { StudentMyBooks } from './student/student-my-books/student-my-books';

export const routes: Routes = [
    {
    path: '',
    component: StudentDashboard,
    children: [
      { path: 'home', component: StudentHome},
      { path: 'browse', component: StudentBrowseBooks},
      { path: 'my-books', component: StudentMyBooks},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];
