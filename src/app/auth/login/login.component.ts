import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: '',
      password: ''
    });
  }
  login(modal) {
    if (modal.email === 'jayac9700@gmail.com' && modal.password === 'jaya*212') {
      this._router.navigate(['/pages']);
    } else {
      alert('please fil the valid email and password');
    }
  }
}
