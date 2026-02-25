import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  loginData: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onLogin() {
    this.http
      .get(
        `http://localhost:3000/users?email=${this.loginData.value.email}&password=${this.loginData.value.password}`,
      )

      .subscribe((res: any) => {
        if (res.length > 0) {
           const user = res[0];
          localStorage.setItem('loginUser', JSON.stringify(res));

          alert('Login Successful');

           if (user.role === 'admin') this.router.navigate(['/admin/home']);
          else this.router.navigate(['/student/home']);
        } 
        else {
          alert('Invalid Email or Password');
        }
      });
  }
}
