import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('loginUser') || '[]');
    if (user[0]?.role === 'student') {
      return true;
    } else {
      alert('Access Denied ❌');
      this.router.navigate(['/login']);
      return false;
    }
  }
}