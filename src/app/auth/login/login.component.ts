import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private f_builder: FormBuilder, private router: Router) {
    this.loginForm = this.f_builder.group({
      user_email: ['', [Validators.required]],
      user_password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    if (
      this.loginForm.value.user_email === 'admin@mail.com' &&
      this.loginForm.value.user_password === 'admin'
    ) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
