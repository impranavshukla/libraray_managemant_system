import { Routes } from '@angular/router';
import { StudentDashboard } from './student/student-dashboard/student-dashboard';
import { StudentHome } from './student/student-home/student-home';
import { StudentBrowseBooks } from './student/student-browse-books/student-browse-books';
import { StudentMyBooks } from './student/student-my-books/student-my-books';
import { AdminHome } from './admin/admin-home/admin-home';
import { AdminAddBook } from './admin/admin-add-book/admin-add-book';
import { AdminViewBook } from './admin/admin-view-book/admin-view-book';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';

export const routes: Routes = [
    {
    path: 'student',
    component: StudentDashboard,
    children: [
      { path: 'home', component: StudentHome},
      { path: 'browse', component: StudentBrowseBooks},
      { path: 'my-books', component: StudentMyBooks},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  {
    path: 'admin',
    component: AdminDashboard,
    children: [
      
      { path: 'home', component: AdminHome },
      { path: 'books', component: AdminAddBook },
      { path: 'students', component: AdminViewBook},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },


];
