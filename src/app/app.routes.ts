import { Routes } from '@angular/router';
import { StudentDashboard } from './student/student-dashboard/student-dashboard';
import { StudentHome } from './student/student-home/student-home';
import { StudentBrowseBooks } from './student/student-browse-books/student-browse-books';
import { StudentMyBooks } from './student/student-my-books/student-my-books';
import { AdminHome } from './admin/admin-home/admin-home';
import { AdminAddBook } from './admin/admin-add-book/admin-add-book';
import { AdminViewBook } from './admin/admin-view-book/admin-view-book';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { AdminGuard } from './guards/auth-guard';
import { StudentGuard } from './guards/student-guard';
import { AdminEditBook } from './admin/admin-edit-book/admin-edit-book';

export const routes: Routes = [
  
  {
    path: '',
    component: Login,
  },

  {
    path: 'login',
    component: Login,
  },

  {
    path: 'signup',
    component: Signup,
  },

  
  {
    path: 'student',
    component: StudentDashboard,
    canActivate: [StudentGuard],  
    children: [
      { path: 'home', component: StudentHome },
      { path: 'browse', component: StudentBrowseBooks },
      { path: 'my-books', component: StudentMyBooks },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  
  {
    path: 'admin',
    component: AdminDashboard,
    canActivate: [AdminGuard], 
    children: [
      { path: 'home', component: AdminHome },
      { path: 'books', component: AdminAddBook },
      { path: 'view-books', component: AdminViewBook },
      
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  {
      path:'admin-edit-book/:id',
     component:AdminEditBook,
     canActivate:[AdminGuard]
},

  
  {
    path: '**',
    redirectTo: '/login',
  },
];